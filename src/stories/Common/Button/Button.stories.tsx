import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Icn from '@/assets/svg/V2';
import Button from '@/components/common/v2/button/Button';

const meta: Meta<typeof Button> = {
	title: 'Common/Button/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
	argTypes: {
		leftIcon: {
			control: { type: 'select' },
			options: Object.keys(Icn),
		},
		rightIcon: {
			control: { type: 'select' },
			options: Object.keys(Icn),
		},
	},
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
export const SolidWithRightIcon: Story = {
	args: {
		type: 'solid',
		size: 'medium',
		disabled: false,
		rightIcon: 'IcnCheck',
		label: 'Label',
		onClick: fn(),
	},
};
export const SolidWithLeftIcon: Story = {
	args: {
		type: 'solid',
		size: 'medium',
		disabled: false,
		leftIcon: 'IcnCheck',
		label: 'Label',
		onClick: fn(),
	},
};
export const SolidWithBothIcon: Story = {
	args: {
		type: 'solid',
		size: 'medium',
		disabled: false,
		leftIcon: 'IcnCheck',
		rightIcon: 'IcnCheck',
		label: 'Label',
		onClick: fn(),
	},
};
