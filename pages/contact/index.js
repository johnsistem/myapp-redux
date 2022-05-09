import React, { useEffect } from "react";
import Users from '../../componentes/UsersList.js' 


//REDUX
import { useDispatch, useSelector } from "react-redux"
import  setUsersData  from "../../store/actions/usersAction.js";
import UsersList from "../../componentes/UsersList.js";
  
const index = () => {

  //const dispatch = useDispatch();
  //const getUsers = useSelector((state) => state.usersData);
  //const { users } = getUsers;
  //console.log(getUsers);
  /* useEffect(() => {
		dispatch(getNumberData());
  }, [dispatch]); */




  return (

		<div>
			
			{/* <h3>Id:{JSON.stringify(users[0].id)}</h3>
			<h3>Name:{JSON.stringify(users[0].name)}</h3>
      <h3>Age:{JSON.stringify(users[0].age)}</h3> */}
      <UsersList/>
		</div>
  );
}

export default index