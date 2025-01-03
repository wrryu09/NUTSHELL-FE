import styled from '@emotion/styled';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Images from '@/assets/images';
import GoogleLoginBtn from '@/components/loginPage/GoogleLoginBtn';
import LoginContainer from '@/components/loginPage/LoginContainer';

function Login() {
	const LOGIN_CLIENT_ID = import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID;

	return (
		<GoogleOAuthProvider clientId={LOGIN_CLIENT_ID}>
			<LoginLayout>
				<LeftSection>
					<LoginContainer />
					<Divider />
					<LoginBtn>
						<GoogleLoginBtn />
						<SignDescription>
							가입하면 자동으로{' '}
							<a
								href="https://topaz-work-262.notion.site/aa83c69d45144f1182f9f54f1fae8c38"
								target="_blank"
								rel="noreferrer"
							>
								개인정보보호정책
							</a>
							과{' '}
							<a
								href="https://topaz-work-262.notion.site/aa83c69d45144f1182f9f54f1fae8c38"
								target="_blank"
								rel="noreferrer"
							>
								이용약관
							</a>
							에 동의한 것으로 간주됩니다.
						</SignDescription>
					</LoginBtn>
				</LeftSection>
				<LoginImg src={Images.BG.loginBg} />
			</LoginLayout>
		</GoogleOAuthProvider>
	);
}

const LoginLayout = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 192rem;
	height: 108rem;

	background-color: ${({ theme }) => theme.color.Grey.White};
	border-radius: 8px;
`;

const LeftSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	align-items: start;
	justify-content: center;
	width: 32rem;
	height: 100%;
`;

const Divider = styled.div`
	width: 0;
	height: 17.95rem;

	border-color: ${({ theme }) => theme.color.Grey.Grey4};
	stroke-width: 0.2rem;
`;

const LoginBtn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	align-items: center;
	width: 32rem;
	height: 10.8rem;
`;

const SignDescription = styled.p`
	width: 23.5rem;

	color: ${({ theme }) => theme.color.Grey.Grey5};
	text-align: center;

	${({ theme }) => theme.font.caption02};
	a {
		color: ${({ theme }) => theme.color.Grey.Grey5};
	}
`;

const LoginImg = styled.img`
	width: 50%;
	height: 100%;

	border-radius: 0 8px 8px 0;
`;
export default Login;
