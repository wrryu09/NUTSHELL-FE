import styled from '@emotion/styled';

import BtnTask from '../common/BtnTask/BtnTask';
import ScrollGradient from '../common/ScrollGradient';

import { TaskType } from '@/types/tasks/taskType';

function TargetTaskSection() {
	const dummyTaskList: TaskType[] = [
		{
			id: 0,
			name: '바보~',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: false,
			status: '진행중',
		},
		{
			id: 1,
			name: '넛수레',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '지연',
		},
		{
			id: 2,
			name: '콘하스',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '완료',
		},
		{
			id: 3,
			name: '김지원',
			deadLine: {
				date: '2024-06-30',
				time: '12:30',
			},
			hasDescription: true,
			status: '미완료',
		},
	];
	return (
		<TaskContainer>
			{dummyTaskList.map((task) => (
				<BtnTask
					btnType="target"
					key={task.id}
					hasDescription={task.hasDescription}
					name={task.name}
					deadLine={task.deadLine}
					status={task.status}
					id={task.id}
				/>
			))}
			<ScrollGradient />
		</TaskContainer>
	);
}
const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 64rem;
	overflow: scroll;
`;

export default TargetTaskSection;
