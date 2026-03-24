"use client"

import dynamic from "next/dynamic";
import { mapHostel } from "../Component/utils/constant";
import getStages from "../Component/getStages";
import { useEffect, useState } from "react";


const MapLeaflet = dynamic(() => import("../Component/map/map"), {
    ssr: false,
});

export type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
    complete: boolean;
};

const MapTotal = () => {
    const [loading, setLoading] = useState(false);
    const [stages, setStages] = useState<TravelStage[]>([]);
    const [progress, setProgress] = useState<number>(0);
    const handleInitial = async () => {
        const stages = await getStages();
        setStages(stages);
        const completedStages = stages.filter((stage) => stage.complete);
        const kmCompleted = completedStages.reduce(
            (acc, s) => acc + s.distance_km,
            0
        );
        const totalKm = stages.reduce(
            (acc, s) => acc + s.distance_km,
            0
        );
        setProgress(stages.filter((stage) => stage.complete).length);
    };

    useEffect(() => {
        handleInitial();
    }, []);

    console.log("🚀 ~ MapTotal ~ stages:", progress)

    return (
        <div className="flex-center flex-column pt-3 pb-3 w-100" >
            {mapHostel.length > 0 && <MapLeaflet height="70vh" width="100%" center={[mapHostel[progress].latitude, mapHostel[progress].longitude]} position={mapHostel.map((item) => [item.latitude, item.longitude])} type={mapHostel.map((item) => item.type)} />}
        </div>
    );
};

export default MapTotal;
