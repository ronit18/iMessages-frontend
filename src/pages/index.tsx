import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>iMessages</title>
				<meta name="iMessages" content="Real time messages app." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<h1>Hello</h1>
			</div>
		</div>
	);
}
