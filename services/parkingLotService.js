import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5257/api';

export const parkingLotService = {
	getParkingLots: async () => {
		try {
			const response = await axios.get(`${API_URL}/ParkingLots`);
			return response.data;
		} catch (error) {
			console.error('Error fetching parking lots:', error);
			throw error;
		}
	},

	searchParkingLots: async (keyword) => {
		try {
			const response = await axios.get(`${API_URL}/ParkingLots?search=${keyword}`);
			return response.data;
		} catch (error) {
			console.error('Error searching parking lots:', error);
			throw error;
		}
	},

	getNearbyParkingLots: async (lat, lng, radiusKm = 2) => {
		try {
			const response = await axios.get(
				`${API_URL}/ParkingLots/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}`,
				{
					headers: {
						'Content-Type': 'application/json',
						// Thêm headers khác nếu cần
					}
				}
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching nearby parking lots:', error);
			throw error;
		}
	},
};

export const { getParkingLots, searchParkingLots, getNearbyParkingLots } = parkingLotService;
