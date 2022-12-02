import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import * as React from "react";

interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
	return (
		<div>
			chat component
			<br />
			<Button onClick={() => signOut()}>Log out</Button>
		</div>
	);
};

export default Chat;
