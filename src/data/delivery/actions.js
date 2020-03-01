import * as ActionTypes from '@/data/rootActionTypes';
import apis from "@/apis";
import * as actions from "@/data/rootActions";

export const setDelivery = (trackingInfo, trackingDetail) => ({
	type: ActionTypes.SET_DELIVERY,
	trackingInfo,
	trackingDetail
});

export const getDelivery = (code, invoice) => async dispatch => {
	try {

		const data = await apis.deliveryApi.getDelivery({ code, invoice });
		if (data.status === false || data.result === 'N') {
			dispatch(actions.delivery.setError(data));
		} else {
			dispatch(actions.delivery.setDelivery(data, data.trackingDetails));
		}
	} catch (error) {
		console.error(error);
		alert(error.message)
	}
};

export const setError = (error) => ({
	type: ActionTypes.SET_ERROR,
	error,
});