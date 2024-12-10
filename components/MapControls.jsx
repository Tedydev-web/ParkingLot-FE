import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParkingLots } from '../actions/parkingLotActions';

const MapControls = ({ map }) => {
	const dispatch = useDispatch();
	const { parkingLots } = useSelector((state) => state.parkingLot);

	const handleParkingClick = () => {
		const center = map.getCenter();
		dispatch(fetchParkingLots(center.lat, center.lng));
	};

	// Thêm markers khi parkingLots thay đổi
	React.useEffect(() => {
		if (parkingLots && parkingLots.length > 0) {
			// Xóa markers cũ nếu cần
			// ...

			// Thêm markers mới
			parkingLots.forEach((lot) => {
				new goongjs.Marker({
					color: lot.markerColor || '#FF0000',
				})
					.setLngLat([lot.longitude, lot.latitude])
					.setPopup(
						new goongjs.Popup().setHTML(`
                        <h3>${lot.name}</h3>
                        <p>${lot.address}</p>
                        <p>Chỗ trống: ${lot.availableSpots}/${lot.capacity}</p>
                    `)
					)
					.addTo(map);
			});
		}
	}, [parkingLots, map]);

	return (
		<div className="map-controls">
			<button
				className="control-button parking"
				onClick={handleParkingClick}
				title="Hiển thị bãi đỗ xe">
				<img
					src="/images/parking.png"
					alt="Parking"
				/>
			</button>
			{/* Các nút điều khiển khác */}
		</div>
	);
};

export default MapControls;
