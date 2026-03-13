"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, SVGOverlay } from "react-leaflet";
import BeerIcon from "../svg/BeerIcon";
import { renderToString } from "react-dom/server";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { divIcon, point } from "leaflet";
import "./styleMap.scss";
import LoveIcon from "../svg/LoveIcon";
import OctopusIcon from "../svg/OctopusIcon";


interface FixMapProps {
    position: [number, number][];
    type: string;
}
const createCustomClusterIcon = (cluster: any) => {
    return divIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: [33, 33]
    });
}


const MapFix = () => {
    const map = useMap();
    useEffect(() => {
        map.invalidateSize();
    }, [map]);
    return null;
};

const MapLeaflet = ({ position, type }: FixMapProps) => {
    console.log("🚀 ~ MapLeaflet ~ position:", position)
    const [street, setStreet] = useState<string | null>(null);

    const beerIcon = L.divIcon({
        html: renderToString(
            <BeerIcon
                width="40"
                height="40"
                fillHeight={100}
                fillOpacity="0.8"
                stroke="#333"
            />
        ),
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    const loveIcon = L.divIcon({
        html: renderToString(
            <LoveIcon
                width="40"
                height="40"
                fillHeight={100}
                fillOpacity="0.8"
                stroke="#333"
            />
        ),
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    const octoIcon = L.divIcon({
        html: renderToString(
            <OctopusIcon
                width="40"
                height="40"
                fillHeight={100}
                fillOpacity="0.8"
                stroke="#333"
            />
        ),
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });


    const getIcon = (type: string) => {
        switch (type) {
            case "beer":
                return beerIcon;
            case "love":
                return loveIcon;
            case "octo":
                return octoIcon;
            default:
                return;
        }
    }

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


    return (
        <>
            <div className="container-title-map" >
                <p className="tittle-map">Donde nos tocó estar</p>
                <p className="letter-map">O Camiño apretao 2026</p>
            </div>
            <MapContainer
                center={position?.[0]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "300px", borderRadius: "10px", width: "80%" }}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                    {position?.map((item: [number, number], index: number) => (
                        <Marker key={index} position={item} icon={getIcon(type)}
                            eventHandlers={{
                                click: () => handleMarkerClick(item[0], item[1], setStreet)
                            }}>
                            <Popup>{street || "Buscando calle..."}</Popup>
                        </Marker>

                    ))}
                </MarkerClusterGroup>
                <MapFix />
            </MapContainer>
        </>
    );
};

export default MapLeaflet;


