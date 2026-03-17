"use client"

import dynamic from "next/dynamic";
import { mapHostel } from "../Component/utils/constant";


const MapLeaflet = dynamic(() => import("../Component/map/map"), {
    ssr: false,
});

const MapTotal = () => {

    return (
        <div className="flex-center flex-column pt-3 pb-3 w-100" >
            {mapHostel.length > 0 && <MapLeaflet height="70vh" width="100%" position={mapHostel.map((item) => [item.latitude, item.longitude])} type={mapHostel.map((item) => item.type)} />}
        </div>
    );
};

export default MapTotal;
