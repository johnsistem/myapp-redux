import { GET_SAMPLE, SAMPLE_ERROR, SUMA_SAMPLE } from "../types";

const initialState = {
	sample: [],
	sum:Number,
	loading: true,
};

const sampleReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SAMPLE:
			return {
				...state,
				sample: action.payload,
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

export default sampleReducer;
