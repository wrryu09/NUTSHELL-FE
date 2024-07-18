import { TaskDescriptionType } from './TaskDescriptionType';

import { privateInstance } from '@/apis/instance';

const taskDescription = async ({ taskId, targetDate }: TaskDescriptionType) => {
	const { data } = await privateInstance.get(`/api/tasks/${taskId}`, {
		params: {
			targetDate,
		},
	});
	console.log(data);
	return data;
};

export default taskDescription;
