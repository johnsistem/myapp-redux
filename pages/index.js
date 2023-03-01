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
		<div>
			esto es de main
			esto es de la nuevo-rama
		</div>
	);
}
