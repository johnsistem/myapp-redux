import React from 'react'
import { Image } from 'next/image';

const index = ({data}) => {
  return (
		<div>
			<h1>USERS:</h1>
			{data.data.map((user) => {
        return (
				// eslint-disable-next-line react/jsx-key
				<div
					style={{
              display: "flex",
            flexDirection:"row",
              alignItems: "center",
            
						justifyContent: "center",						
              marginBottom: 20,
           
					}}
				>
					<div className="card">
						<img
							src={user.avatar}
							className="card-img-top"
							height="150"
                width="150"
               
						/>
						<div className="card-body">
							<h5 className="card-title">{user.first_name}</h5>
							<p className="card-text">{user.last_name}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			);
		
			})}
		</div>
  );
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch(`http://localhost:3000/api/hello`);
  const res = await fetch(`https://reqres.in/api/users?per_page=12`);
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default index



