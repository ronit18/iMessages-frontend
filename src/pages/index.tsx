import { Box } from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Auth from "../components/Auth/Auth";
import Chat from "../components/Chat/Chat";
import { Session } from "next-auth";

const Home: NextPage = () => {
	const { data } = useSession();
	console.log("data is", data);
	return (
		<div>
			<Head>
				<title>iMessages</title>
				<meta name="iMessages" content="Real time messages app." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box>{data?.user ? <Chat /> : <Auth />}</Box>
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
