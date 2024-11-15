import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '@/components/common/v2/Button';

const meta = {
	title: 'Common/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		type: 'solid',
		size: 'medium',
		disabled: false,
		label: 'Label',
		onClick: fn(),
	},
};
export const OutlinedPrimary: Story = {
	args: {
		type: 'outlined-primary',
		size: 'medium',
		disabled: false,
		label: 'Label',
		onClick: fn(),
	},
};
export const OutlinedAssistive: Story = {
	args: {
		type: 'outlined-assistive',
		size: 'medium',
		disabled: false,
		label: 'Label',
		onClick: fn(),
	},
};
export const TextPrimary: Story = {
	args: {
		type: 'text-primary',
		size: 'medium',
		disabled: false,
		label: 'Label',
		onClick: fn(),
	},
};
export const TextAssistive: Story = {
	args: {
		type: 'text-assistive',
		size: 'medium',
		disabled: false,
		label: 'Label',
		onClick: fn(),
	},
};
