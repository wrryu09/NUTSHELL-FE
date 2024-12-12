import styled from '@emotion/styled';

import Icon from '@/components/common/Icon';

interface TimeBtnProps {
	time: string;
}

function TimeBtn({ time }: TimeBtnProps) {
	return (
		<TimeBtnLayout>
			<TextBox>{time}</TextBox>
			<Icon name="IcnDown" size="tiny" color="nomal" />
		</TimeBtnLayout>
	);
}

export default TimeBtn;

const TimeBtnLayout = styled.button`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	width: auto;
	height: 3.2rem;
	padding: 0 1.6rem;

	background-color: ${({ theme }) => theme.colorToken.Neutral.normal};
	border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
	border-radius: 8px;
`;

const TextBox = styled.p`
	width: auto;
	height: 1.4rem;

	color: ${({ theme }) => theme.colorToken.Text.assistive};
	${({ theme }) => theme.font.label05};
	font-weight: 500;
`;
