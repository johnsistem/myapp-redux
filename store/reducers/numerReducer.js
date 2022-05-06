import { SAMPLE_ERROR, SUMA_SAMPLE } from "../types";


const initialState = {	
	user: [
		{
			id: 1,
			name: 'Johnny',
			age:49
		}
	],
	loading: true,
};

const numberReducer = (state = initialState, action) => {
	switch (action.type) {		
		case SUMA_SAMPLE:
			return {
				...state,
				sum: action.payload,
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

export default numberReducer;
