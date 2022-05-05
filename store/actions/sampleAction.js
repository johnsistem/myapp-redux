import { GET_SAMPLE, SAMPLE_ERROR, SUMA_SAMPLE } from "../types";

export const getSampleData = () => async (dispatch) => {
	try {
	/* 	dispatch({
			type: GET_SAMPLE,
			payload: [1, 2, 3, 4, 5, 6],
		}); */
		dispatch({
			type: SUMA_SAMPLE,
			payload: 8*4,
		});
	} catch (error) {
		dispatch({
			type: SAMPLE_ERROR,
			payload: "error message",
		});
	}
};
