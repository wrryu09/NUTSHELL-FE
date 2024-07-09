import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SettingCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const smallSize = css`
	width: 2.4rem;
	height: 2.4rem;

	border-radius: 8px;
`;

export const bigSize = css`
	width: 3.2rem;
	height: 3.2rem;

	border-radius: 10px;
`;

export const smallIcon = css`
	width: 1.6rem;
	height: 1.6rem;
`;

export const bigIcon = css`
	width: 2.2rem;
	height: 2.2rem;
`;

export const SettingLayout = styled.button<{ size: string; isFill: boolean }>`
	${({ size }) => (size === 'small' ? smallSize : bigSize)};
	${SettingCss}
	background-color: ${({ theme }) => theme.palette.Blue.Blue1};

	&:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	&:active {
		background-color: ${({ theme }) => theme.palette.Primary};

		path {
			${({ isFill, theme }) => (isFill ? `fill: ${theme.palette.Grey.White};` : `stroke: ${theme.palette.Grey.White};`)}
		}
	}
`;
