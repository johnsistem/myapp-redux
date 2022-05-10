import React, { useEffect, useState } from 'react'
import axios from "axios";



const UserDetail = () => {
   const [user, setUser] = useState([]);

	

   useEffect(() => {
		// declare the async data fetching function
		const getUsers = async () => {
			// get the data from the api
			const data = await axios.get(`https://fakestoreapi.com/users/${1}`);

			// convert data to json
			const json = await data.json();
			return json;
      };
      
      // call the function
  const result = getUsers()
		// make sure to catch any error
		.catch(console.error);;


		
	}, []);
	return (
      <div>
         {user.username}
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