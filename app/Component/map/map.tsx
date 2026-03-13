"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, SVGOverlay } from "react-leaflet";
import BeerIcon from "../svg/BeerIcon";
import { renderToString } from "react-dom/server";
import L from "leaflet";

interface FixMapProps {
    position: [number, number][];
}


const MapFix = () => {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, [map]);
    return null;
};

const MapLeaflet = ({ position }: FixMapProps) => {
    const [street, setStreet] = useState<string | null>(null);

    const beerIcon = L.divIcon({
        html: renderToString(
            <BeerIcon
                width="40"
                height="40"
                fill="#9f5d12"
                fillHeight={100}
                fillOpacity="0.8"
                stroke="#333"
            />
        ),
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    const getAddressFromCoords = async (lat: number, lon: number) => {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );

        const data = await res.json();

        return data.address?.road || data.display_name;
    };
    const handleMarkerClick = async (lat: number, lon: number, setStreet: any) => {
        const street = await getAddressFromCoords(lat, lon);
        setStreet(street);
    };

    console.log(position);
    return (
        <MapContainer
            center={position?.[0]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position?.map((item: [number, number], index: number) => (
                <Marker key={index} position={item} icon={beerIcon}
                    eventHandlers={{
                        click: () => handleMarkerClick(item[0], item[1], setStreet)
                    }}>
                    <Popup>{street || "Buscando calle..."}</Popup>
                </Marker>

            ))}
            <MapFix />
        </MapContainer>
    );
};

export default MapLeaflet;


