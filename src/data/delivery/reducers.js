import * as ActionTypes from "@/data/rootActionTypes";

const INITIAL_STATE = {
	trackingInfo: {},
	trackingDetail: [],
	error: '',
};

function delivery(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case ActionTypes.SET_DELIVERY:
			return {
				error: '',
				trackingInfo: action.trackingInfo,
				trackingDetail: action.trackingDetail,
			};
		case ActionTypes.SET_ERROR:
			return {
				trackingInfo: '',
				trackingDetail: '',
				error: action.error
			};
		default:
			return state;
	}
}

export default delivery
