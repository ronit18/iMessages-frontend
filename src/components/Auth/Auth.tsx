import * as React from "react";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "@prisma/client";
import { signIn } from "next-auth/react";

interface AuthProps {
	session: Session | null;
	reloadSession: () => void;
}

const Auth: React.FC<AuthProps> = ({ session, reloadSession }) => {
	const [username, setUsername] = React.useState("");
	const onSubmit = async () => {
		try {
			// mutation to send our username to the graphQL API
		} catch (error) {
			console.log("onSubmit error:", error);
		}
	};
	return (
		<Center height="100vh">
			<Stack align="center" spacing={3}>
				{session ? (
					<>
						<Text fontSize="3xl" padding={2}>
							Create a Username
						</Text>
						<Input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Enter a Username.."
						/>
						<Button width="100%" onClick={onSubmit}>
							Submit
						</Button>
					</>
				) : (
					<>
						<Text fontSize="3xl">iMessages</Text>
						<Button
							onClick={() => {
								signIn("google");
							}}
							leftIcon={
								<Image
									height="20px"
									src="/images/googlelogo.png"
									alt="GoogleImage"
								/>
							}
						>
							Sign In with google
						</Button>
					</>
				)}
			</Stack>
		</Center>
	);
};

export default Auth;
