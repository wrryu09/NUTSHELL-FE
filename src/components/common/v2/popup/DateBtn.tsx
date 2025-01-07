import styled from '@emotion/styled';
import { useState } from 'react';

import DateCorrectionModal from '@/components/common/datePicker/DateCorrectionModal';
import Icon from '@/components/common/Icon';
import formatDateWithDay from '@/utils/formatDateWithDay';

interface DateBtnProps {
	isAllday: boolean;
	isSetDate: boolean;
	startTime?: string;
	endTime: string;
	date: Date;
	setDate: (newDate: Date) => void;
}

function DateBtn({ isAllday, isSetDate, startTime, endTime, date, setDate }: DateBtnProps) {
	const [isOpen, setIsOpen] = useState(false);

	const renderTimeText = () => {
		if (isAllday) return null;
		if (startTime && endTime) {
			return `${startTime}-${endTime}`;
		}
		if (endTime) {
			return `${endTime} 까지`;
		}
		return null;
	};

	const onClickDateBtn = () => {
		if (!isSetDate) setIsOpen((prev) => !prev);
	};

	const handleSelectDate = () => {
		setIsOpen(false);
	};

	const handleCurrentDate = (newDate: Date) => {
		setDate(newDate);
		setIsOpen(false);
	};

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<DateWrapper onBlur={handleBlur} tabIndex={-1}>
			<DateBtnLayout onClick={onClickDateBtn} isActive={isOpen}>
				<Icon name={isSetDate ? 'IcnModify' : 'IcnCalendar'} size="tiny" color="nomal" />
				<TextBox>
					{formatDateWithDay(date)} {isSetDate && renderTimeText()}
				</TextBox>
			</DateBtnLayout>
			{isOpen && (
				<StyledTimeDropdown tabIndex={-1}>
					<DateCorrectionModal
						date={formatDateWithDay(date)}
						onClick={handleSelectDate}
						handleCurrentDate={handleCurrentDate}
					/>
				</StyledTimeDropdown>
			)}
		</DateWrapper>
	);
}

const DateWrapper = styled.div`
	position: relative;
`;

const DateBtnLayout = styled.button<{ isActive: boolean }>`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
	width: auto;
	height: 3.2rem;
	padding: 0 1.6rem;

	background-color: ${({ theme, isActive }) => (isActive ? theme.color.Grey.Grey3 : theme.colorToken.Neutral.normal)};
	border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
	border-radius: 8px;

	:hover {
		background-color: ${({ theme, isActive }) => (isActive ? theme.color.Grey.Grey3 : theme.color.Grey.Grey2)};
	}
`;

const TextBox = styled.p`
	width: auto;
	height: 1.4rem;

	color: ${({ theme }) => theme.colorToken.Text.assistive};
	${({ theme }) => theme.font.label05};
	font-weight: 500;
`;

const StyledTimeDropdown = styled.div`
	position: absolute;
	z-index: 3;
	padding-top: 0.8rem;
`;

export default DateBtn;
