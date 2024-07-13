import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

const BtnTaskContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 56.7rem;
	overflow: auto;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0.6rem;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${theme.palette.Grey.Grey6};
		visibility: hidden;
		border-radius: 3px;
	}

	&:hover::-webkit-scrollbar-thumb {
		visibility: visible;
	}
`;

export default BtnTaskContainer;
