import { GET_SAMPLE, SAMPLE_ERROR, SUMA_SAMPLE } from "../types";


export const getNumberData = () => async (dispatch) => {
	try {
	 	
		dispatch({
			type: SUMA_SAMPLE,
			
		});
	} catch (error) {
		dispatch({
			type: SAMPLE_ERROR,
			payload: "error message",
		});
	}
};
