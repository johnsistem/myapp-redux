import { SAMPLE_ERROR, SET_USERS } from "../types";


const initialState = {	
	users: [],
	loading: true,
};

const getUsersReducer = (state = initialState, action) => {
	switch (action.type) {		
		case SET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};

		case SAMPLE_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default getUsersReducer;
