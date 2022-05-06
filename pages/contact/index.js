import React, { useEffect } from "react";


//REDUX
import { useDispatch, useSelector } from "react-redux"
import {getNumberData} from "../../store/actions/numberAction.js"
  
const index = () => {

  const dispatch = useDispatch();
  const getNumber = useSelector((state) => state.numberData)
  const { user } = getNumber;

  useEffect(() => {
		dispatch(getNumberData());
  }, [dispatch]);

  return (
		<div>
			
			<h3>Id:{JSON.stringify(user[0].id)}</h3>
			<h3>Name:{JSON.stringify(user[0].name)}</h3>
			<h3>Age:{JSON.stringify(user[0].age)}</h3>
		</div>
  );
}

export default index