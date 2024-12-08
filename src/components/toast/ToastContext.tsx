import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

import ToastContainer from '@/components/toast/ToastContainer';

interface ToastItem {
	id: number;
	message: string;
	code: string;
}

interface ToastContextProps {
	toasts: ToastItem[];
	addToast: (message: string, code: string) => void;
	removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	const addToast = (message: string, code: string) => {
		const id = new Date().getTime();
		setToasts((prevToasts) => [...prevToasts, { id, message, code }]);
	};

	const removeToast = (id: number) => {
		setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
	};

	const value = useMemo(
		() => ({
			toasts,
			addToast,
			removeToast,
		}),
		[toasts]
	);

	return (
		<ToastContext.Provider value={value}>
			{children}
			<ToastContainer />
		</ToastContext.Provider>
	);
}
