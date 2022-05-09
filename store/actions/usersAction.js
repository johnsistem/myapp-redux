import { GET_SAMPLE, SAMPLE_ERROR, SET_USERS } from "../types";


export const setUsersData = (users) =>  {
	try {
	 	
		return {
			type: SET_USERS,
			payload: users,
		};
	} catch (error) {
		dispatch({
			type: SAMPLE_ERROR,
			payload: "error message",
		});
	}
};
