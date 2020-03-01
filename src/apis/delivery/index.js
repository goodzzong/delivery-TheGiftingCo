import { apiClient } from '@/apis/client'

export const api = {
	async getDelivery({ code, invoice }) {
		try {
			const res = await apiClient.get(`/api/v1/trackingInfo?t_key=Mv1XPhnJbeIxPIzFzy5BAg&t_code=${code}&t_invoice=${invoice}`);
			return res.data
		} catch (e) {
			throw Error(e.message);
		}
	}
};
