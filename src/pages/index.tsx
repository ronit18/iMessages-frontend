import { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

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

			<div>
				<h1>Hello</h1>

				{data?.user ? (
					<>
						{data?.user?.name}
						<br />
						<img src={data?.user?.image} alt="me" />
						<br />

						<button onClick={() => signOut()}>Sign Out</button>
					</>
				) : (
					<>
						<button onClick={() => signIn("google")}>
							sign in
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
