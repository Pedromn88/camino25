"use client"

import dynamic from "next/dynamic";
import { mapHostel } from "../Component/utils/constant";


const MapLeaflet = dynamic(() => import("../Component/map/map"), {
    ssr: false,
});

const MapTotal = () => {

    return (
        <div>
            {mapHostel.length > 0 && <MapLeaflet position={mapHostel.map((item) => [item.latitude, item.longitude])} type="beer" />}
        </div>
    );
};

export default MapTotal;
