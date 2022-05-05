import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../componentes/NavBar.js'
import styles from '../styles/Home.module.css'

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/actions/sampleAction";
import { useEffect } from "react";


export default function Home() {

const dispatch = useDispatch();
const sampleListData = useSelector((state) => state.sampleData);
const { sample } = sampleListData;
useEffect(() => {
	dispatch(getSampleData());
}, [dispatch]);


  return (
		/* 	<div className={styles.container}>
			

			<main className={styles.main}>
				

				<div className={styles.grid}>
					<Link href='123'>
						<a href="https://nextjs.org/docs" className={styles.card}>
							<h2>Documentation &rarr;</h2>
							<p>
								Find in-depth information about Next.js features and
								API.
							</p>
						</a>
					</Link>
				
					
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div> */
		<h3>{JSON.stringify(sample)}</h3>
  );
}
