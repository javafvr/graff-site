function initMap(){
	var tyumen = {lat: 57.122930, lng: 65.566145};
	var isDraggable;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		isDraggable = false;
	} else{
		isDraggable = true;
	}
	var main_color = '#513745';
	var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 18,
			center: tyumen,
			draggable:isDraggable,
			disableDefaultUI:true,
			scrollwheel: false,
			mapTypeControl: false,
			styles: [
						{
											"elementType": "geometry",
											"stylers": [{"color": main_color}]},
						{
											"elementType": "geometry",
											"stylers": [{"color": main_color}]
										},
										{
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#746855"}]
										},
										{
											"elementType": "labels.text.stroke",
											"stylers": [{"color": "#242f3e"}]
										},
										{
											"featureType": "administrative.locality",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#d59563"}]
										},
										{
											"featureType": "landscape.man_made",
											"elementType": "geometry.stroke",
											"stylers": [{"color": "#ffffff"}]
										},
										{
											"featureType": "poi",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#d59563"}]
										},
										{
											"featureType": "poi.attraction",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "poi.government",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "poi.medical",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "poi.park",
											"elementType": "geometry",
											"stylers": [{"color": "#263c3f"}]
										},
										{
											"featureType": "poi.park",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#6b9a76"}]
										},
										{
											"featureType": "poi.place_of_worship",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "poi.school",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "poi.sports_complex",
											"stylers": [{"visibility": "off"}]
										},
										{
											"featureType": "road",
											"elementType": "geometry",
											"stylers": [{"color": "#38414e"}]
										},
										{
											"featureType": "road",
											"elementType": "geometry.stroke",
											"stylers": [{"color": "#212a37"}]
										},
										{
											"featureType": "road",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#9ca5b3"}]
										},
										{
											"featureType": "road.highway",
											"elementType": "geometry",
											"stylers": [{"color": "#746855"}]
										},
										{
											"featureType": "road.highway",
											"elementType": "geometry.stroke",
											"stylers": [{"color": "#1f2835"}]
										},
										{
											"featureType": "road.highway",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#f3d19c"}]
										},
										{
											"featureType": "transit",
											"elementType": "geometry",
											"stylers": [{"color": "#2f3948"}]
										},
										{
											"featureType": "transit.station",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#d59563"}]
										},
										{
											"featureType": "water",
											"elementType": "geometry",
											"stylers": [{"color": "#17263c"}]
										},
										{
											"featureType": "water",
											"elementType": "labels.text.fill",
											"stylers": [{"color": "#515c6d"}]
										},
										{
											"featureType": "water",
											"elementType": "labels.text.stroke",
											"stylers": [{"color": "#17263c"}]
										}]});
	var marker = new google.maps.Marker({
		position: tyumen,
		map: map,
		title: 'Тюмень',
		icon: '/img/g_sign.png'
	});
	var contentStringTyumen = '<div id="content" class="map-notice">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="heading">Тюмень</h1>'+
	      '<div id="bodyContent" class="map-notice__body">'+
	      '<p>ул. Николая Федорова 6/к.1<br>' +
	      'Тюмень, Россия  625000</p>'+
	      '</div>'+
	      '</div>';
	var infowindowTyumen = new google.maps.InfoWindow({
		content: contentStringTyumen,
		maxWidth: 400
	});
	marker.addListener('click', function() {
		infowindowTyumen.open(map, marker);
	});
};