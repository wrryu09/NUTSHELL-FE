import { css, SerializedStyles, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { cloneElement, ReactElement } from 'react';

type SizeType = 'small' | 'big';
type IconBtnType = 'solid' | 'normal' | 'outlined';
type IconButtonProps = {
	type: IconBtnType;
	size: SizeType;
	disabled: boolean;
	Icon: ReactElement;
	onClick: () => void;
};

function IconButton({ type, size = 'small', disabled = false, Icon, onClick }: IconButtonProps) {
	const { color } = useTheme();
	// 사이즈별 분기
	const buttonSizes: Record<SizeType, SerializedStyles> = {
		big: css`
			width: 4rem;
			height: 4rem;
		`,
		small: css`
			width: 3.2rem;
			height: 3.2rem;
		`,
	};

	// 아이콘 배경 색상 및 테두리
	const getIconBtnStyles = (
		strokeColor: string,
		defaultBG: string,
		hoverBG: string,
		pressedBG: string,
		border: boolean
	) => {
		if (disabled) {
			if (type === 'solid')
				return css`
					background-color: ${color.Blue.Blue2};
				`;
			return css`
				${border &&
				css`
					box-sizing: border-box;

					border: solid 1px ${color.Grey.Grey3};
				`}
			`;
		}
		return css`
			background-color: ${defaultBG};

			${border &&
			css`
				box-sizing: border-box;

				border: solid 1px ${strokeColor};
			`}

			:hover {
				background-color: ${hoverBG};
			}

			:active {
				background-color: ${pressedBG};
			}
		`;
	};
	const buttonStyles: Record<IconBtnType, SerializedStyles> = {
		solid: getIconBtnStyles(color.Grey.White, color.Blue.Blue6, color.Blue.Blue7, color.Blue.Blue8, false),
		normal: getIconBtnStyles(color.Grey.Grey5, color.Grey.White, color.Grey.Grey2, color.Grey.Grey3, false),
		outlined: getIconBtnStyles(color.Grey.Grey4, color.Grey.White, color.Grey.Grey2, color.Grey.Grey3, true),
	};

	// 아이콘 색상 설정
	const getIconColor = () => {
		const iconColors = {
			solid: color.Grey.White,
			normal: disabled ? color.Grey.Grey4 : color.Grey.Grey5,
			outlined: disabled ? color.Grey.Grey4 : color.Grey.Grey5,
		};
		return iconColors[type];
	};
	const ColoredIcon = cloneElement(Icon, { color: getIconColor() });

	const IconBtnContainer = styled.div`
		display: flex;
		${buttonSizes[size]}
		align-items: center;
		justify-content: center;

		border-radius: 8px;
		${buttonStyles[type]}
	`;

	return <IconBtnContainer onClick={disabled ? () => {} : onClick}>{ColoredIcon}</IconBtnContainer>;
}

export default IconButton;
