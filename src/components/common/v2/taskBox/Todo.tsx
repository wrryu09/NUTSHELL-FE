import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import DropdownButton from '../control/DropdownButton';

import useTodoEventHandler from '@/hooks/useTodoEventHandler';
import { STATUS } from '@/types/tasks/taskType';

const TODO_EVENT_STATE = {
	DEFAULT: 'default',
	HOVER: 'hover',
	PRESSED: 'pressed',
	FLOATED: 'floated',
} as const;

type TodoEventState = (typeof TODO_EVENT_STATE)[keyof typeof TODO_EVENT_STATE];

type StatusType = (typeof STATUS)[keyof typeof STATUS];

type TodoProps = {
	title: string;
	deadlineDate?: string;
	deadlineTime?: string;
	status: StatusType;
	isStatusVisible?: boolean;
};

function Todo({ title, deadlineDate, status: initStatus, isStatusVisible = true, deadlineTime }: TodoProps) {
	const { state, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleDragStart, handleDragEnd } =
		useTodoEventHandler();

	const [status, setStatus] = useState<StatusType>(initStatus);
	const isCompleted = status === STATUS.COMPLETE;

	const handleStatusChange = (newStatus: StatusType) => {
		setStatus(newStatus);
	};

	return (
		<TodoContainer
			isCompleted={isCompleted}
			state={state}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			draggable
		>
			<TodoWrapper>
				<span className="todo-title">{title}</span>
				{deadlineDate && (
					<span className="todo-deadline">
						{deadlineDate} / {deadlineTime}
					</span>
				)}
			</TodoWrapper>
			{isStatusVisible && (
				<DropdownWrapper>
					<DropdownButton status={status} handleStatusChange={handleStatusChange} />
				</DropdownWrapper>
			)}
		</TodoContainer>
	);
}

export default Todo;

const baseStyles = ({ theme }: { theme: Theme }) => css`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	box-sizing: border-box;
	width: 100%;

	background-color: ${theme.colorToken.Component.normal};
	border-radius: 12px;
`;

const stateStyles = ({ theme, state, isCompleted }: { theme: Theme; state: TodoEventState; isCompleted: boolean }) => {
	switch (state) {
		case TODO_EVENT_STATE.PRESSED:
			return css`
				background-color: ${theme.colorToken.Component.strong};
				border-color: ${theme.colorToken.Outline.primaryStrong};
			`;
		case TODO_EVENT_STATE.FLOATED:
			return css`
				background-color: ${theme.colorToken.Component.strong};
				box-shadow:
					0 16px 20px rgb(0 0 0 / 12%),
					0 8px 16px rgb(0 0 0 / 8%),
					0 0 8px rgb(0 0 0 / 8%);
				border-color: ${theme.colorToken.Outline.primaryStrong};
			`;
		default:
			return css`
				border: 1px solid
					${isCompleted ? theme.colorToken.Outline.neutralNormal : theme.colorToken.Outline.neutralStrong};
			`;
	}
};

const textStyles = ({ theme, isCompleted }: { theme: Theme; isCompleted: boolean }) => css`
	.todo-title {
		display: -webkit-box;

		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;

		color: ${isCompleted ? theme.colorToken.Text.assistive : theme.colorToken.Text.neutralLight};
		text-overflow: ellipsis;
		word-break: break-all;
		${isCompleted ? theme.font.body02 : theme.font.body01};
		${isCompleted && 'text-decoration: line-through;'};
	}

	.todo-deadline {
		color: ${isCompleted ? theme.colorToken.Text.disable : theme.colorToken.Text.assistive};
		${isCompleted ? theme.font.caption03 : theme.font.caption02};
		${isCompleted && 'text-decoration: line-through;'};
	}
`;

const TodoContainer = styled.div<{ isCompleted: boolean; state: TodoEventState }>`
	${({ theme }) => baseStyles({ theme })}
	${({ theme, isCompleted }) => textStyles({ theme, isCompleted })}
	${({ theme, state, isCompleted }) => stateStyles({ theme, state, isCompleted })}

	&:hover {
		border-color: ${({ theme }) => theme.colorToken.Outline.primaryStrong};
		border-width: ${({ isCompleted }) => (isCompleted ? '1px' : '2px')};
	}
`;

const TodoWrapper = styled.div`
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
	gap: 4px;
	align-items: flex-start;
	padding: 1rem 2.4rem 1.4rem;
`;

const DropdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 6.4rem;
	padding: 8px 8px 24px 0;
`;
