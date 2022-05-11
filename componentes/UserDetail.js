import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios";



const UserDetail = () => {
   const [user, setUser] = useState([]);	
	
const getUsers =useCallback (async () => {
			// get the data from the api
			const response=await axios.get(`https://fakestoreapi.com/users/${user}`);
	//console.log("respuesta", response.data)	
		setUser(response)
      },[])


   useEffect(() => {
		getUsers();
		
	}, []);



	return (
      <div>
   {console.log(user)}
			{/*  {users.map((user) => {
					
					return (
						// eslint-disable-next-line react/jsx-key
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",

								justifyContent: "center",
								marginBottom: 20,
							}}
						>
							<div className="card">
								
								<div className="card-body">
									<h5 className="card-title">{user.username}</h5>
									<p className="card-text">{user.username}</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					);
				})}  */}
		</div>
	);
}

export default UserDetail