import React,{useEffect, useState} from 'react'

import { useRouter } from "next/router";
//component
import UserDetail from '../../componentes/UserDetail.js';

//REDUX
 import {setUsersData} from "../../store/actions/usersAction.js"
import { Image } from 'next/image';
import { useDispatch, useSelector } from "react-redux";


const index = () => {
	const router = useRouter();
	const { id } = router.query;
	console.log("my id prams:", id);

	

	

	return (
		<>
			<div>
				<h1>USERS:</h1>
				<UserDetail/>

				
			</div>
			<div>
				<h1>HOLA</h1>
			</div>
		</>
	);
}


// This gets called on every request
/* export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch(`http://localhost:3000/api/hello`);
  const res = await fetch(`https://reqres.in/api/users?per_page=12`);
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
} */

export default index



