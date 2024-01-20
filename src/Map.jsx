import React from 'react';
import { GoogleMap, InfoBox, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const key = "AIzaSyBKoEACDcmaJYjODh0KpkisTk1MPva76s8";
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}