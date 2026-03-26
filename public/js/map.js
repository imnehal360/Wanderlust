
mapboxgl.accessToken = mapToken;
let coordinates = [77.2090, 28.6139]; // Default: New Delhi
if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    coordinates = listing.geometry.coordinates;
}

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    const marker = new mapboxgl.Marker({color:"red"})
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({offset:25}).setHTML('<h4>' + listing.title + '</h4><p>Exact location provided after booking.</p>'))
        .addTo(map);
} else {
    // Add a popup to the default center explaining what happened
    new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(coordinates)
        .setHTML('<i>No location data for this listing</i>')
        .addTo(map);
}
