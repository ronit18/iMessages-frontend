import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Auth from "../components/Auth/Auth";
import Chat from "../components/Chat/Chat";
import { Session } from "next-auth";

const Home: NextPage = () => {
	const { data: session } = useSession();
	console.log("data is", session);
	const reloadSession = () => {};
	return (
		<div>
			<Head>
				<title>iMessages</title>
				<meta name="iMessages" content="Real time messages app." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>
				{session?.user.username ? (
					<Chat />
				) : (
					<Auth session={session} reloadSession={reloadSession} />
				)}
			</Box>
		</div>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
export default Home;
