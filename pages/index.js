import Head from 'next/head'
import axios from 'axios'

import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../componentes/NavBar.js'
import styles from '../styles/Home.module.css'

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setUsersData }  from "../store/actions/usersAction.js";
import { useEffect } from "react";


export default function Home() {

const dispatch = useDispatch();
const usersList = useSelector((state) => state.usersData);
//const sampleSum = useSelector((state) => state.sampleData);
	const {  users } = usersList;
	
	//get users
	const getUsers = async() => {
		const response = await axios.get("https://fakestoreapi.com/users")
			.catch((err) => {
				console.log("err:", err);
			});
		//console.log(response.data);
		dispatch(setUsersData(response.data));
		
	 }
	
	
	useEffect(() => {
		getUsers();
	//dispatch(getSampleData());
}, []);

	console.log("lista de usuarios:",users);
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.grid}>
					<Link href="123">
						<a href="https://nextjs.org/docs" className={styles.card}>
							<h2>Documentation &rarr;</h2>
							<p>
								{/* Find in-depth information about Next.js features and
								API. */}
							</p>
						</a>
					</Link>
				</div>
				<div className={styles.grid}>
					<a href="./contact" className={styles.card}>
						<h2>NEW PAGE &rarr;</h2>
						<p>
							{/* Find in-depth information about Next.js features and API. */}
						</p>
					</a>
				</div>
				<div>
					{users.map((user) => (
						
						<div key={user.id}>
							<Link href={`/${user.id}`} passHref>

								{user.username}
							</Link>
								</div>
						
					))}
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
		</div>
	);
}
