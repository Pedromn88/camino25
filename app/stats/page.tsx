"use client";

import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import "./styleStats.scss"
import ProgressBar from '../Component/ProgressBar/ProgressBar';
import { useInitial } from '../Component/Custom/hooks/useInitial';
import { type } from 'os';
import OctopusIcon from '../Component/svg/OctopusIcon';
import LoveIcon from '../Component/svg/LoveIcon';
import BeerIcon from '../Component/svg/BeerIcon';
import getStages from '../Component/getStages';
import LoadingCustom from '../Component/Custom/LoadingCustom';
import { Progress } from '../Component/Custom/hooks/usedistanceComplete';
import { completeStage } from '../Component/postStage';
import CheckboxCustom from '../Component/Custom/checkbox';

export type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
    complete: boolean;
};


type Item = {
    type: string;
    loading: boolean;
    count: number;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    saveLimit: () => Promise<void>;
};

const Stats = () => {
    const [stages, setStages] = useState<TravelStage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [progress, setProgress] = useState<Progress>({
        kmCompleted: 0,
        totalKm: 0,
        percentage: 0,
        completedStages: 0,
        currentStage: 0,
    });
    const [checked, setChecked] = useState(false);
    const octo = useInitial("octopus");
    const beer = useInitial("beer");
    const love = useInitial("love");

    const items: Item[] = [
        {
            type: "octopus",
            loading: octo.loading,
            count: octo.count,
            limit: octo.limit,
            setLimit: octo.setLimit,
            saveLimit: octo.saveLimit,
        },
        {
            type: "beer",
            loading: beer.loading,
            count: beer.count,
            limit: beer.limit,
            setLimit: beer.setLimit,
            saveLimit: beer.saveLimit,
        },
        {
            type: "love",
            loading: love.loading,
            count: love.count,
            limit: love.limit,
            setLimit: love.setLimit,
            saveLimit: love.saveLimit,
        },
    ];


    const handleInitial = async () => {
        setLoading(true);

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
        setProgress({
            kmCompleted,
            totalKm,
            percentage: totalKm > 0 ? (kmCompleted / totalKm) * 100 : 0,
            completedStages: completedStages.length,
        });
        setLoading(false);
    };



    const handleCompleteStage = async () => {
        setLoading(true)
        const nextStage = (progress.completedStages ?? 0) + 1;
        console.log("🚀 ~ handleCompleteStage ~ nextStage:", nextStage)
        await completeStage(nextStage);
        console.log("🚀 ~ handleCompleteStage ~ nextStage:", "okkk")
        handleInitial();
        setLoading(false)
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "beer":
                return <BeerIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;
            case "love":
                return <LoveIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;
            case "octopus":
                return <OctopusIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;

            default:
                return;
        }
    }

    useEffect(() => {
        handleInitial();
    }, []);


    return (
        <>
            {loading && <LoadingCustom message="Cargando estadísticas" loading={loading} />}
            {!loading && progress && stages.length > 0 &&
                <Grid container className="w-100">
                    <Grid size={12} className="flex-center-column ">
                        <h1 className='title-stats'>Progreso o Camiño</h1>

                        <ProgressBar currentStage={progress.percentage} totalStages={100} color="#4a1d7f" />

                    </Grid>
                    <Grid container className="w-100 flex-center">
                        <Grid size={12} className="flex-center-column ">
                            <span className="card-progress-stats card-stats-confirm w-100">
                                <p><span className='title-stats'>Etapas a completar:</span>{stages?.filter((stage) => stage.stage === progress.completedStages + 1)[0].route}</p>
                                <CheckboxCustom checked={checked} setChecked={setChecked} onChange={() => handleCompleteStage()} />
                            </span>
                        </Grid>

                    </Grid>
                    <Grid container className="w-100 flex-center">
                        {items.map((item, i) => (
                            <Grid size={4} key={i} className='card-stats'>
                                <div className={`avatar avatar-stats ${item.type === "octopus" ? "octo-bg-color" : item.type === "beer" ? "beer-bg-color" : "love-bg-color"}`}>
                                    {getIcon(item.type)}
                                </div>
                                <span className='title-stats'>
                                    <p>{item.count}</p> / <p>{item.limit}</p>
                                </span>
                            </Grid>
                        ))}

                    </Grid>
                    <Grid size={12} className="w-100">
                        <span className="card-progress-stats card-stats-complete">
                            <p><span className='title-stats'>Etapas completada:</span> {progress.completedStages}</p>

                        </span>
                        <span className="card-progress-stats card-stats-complete">
                            <p><span className='title-stats'>Kilómetros Recorridos:</span> {progress.kmCompleted}</p>
                        </span>
                        <span className="card-progress-stats card-stats-complete">
                            <p><span className='title-stats'>Última Etapa Completada:</span> {stages.filter((stage) => stage.stage === progress.completedStages)?.[0]?.route ?? "Ni hemos salido de casa, ¡a darle caña!"}</p>
                        </span>
                        <span className="card-progress-stats card-stats-next">
                            <span>
                                <p className="letter-stats-next"><span className='title-stats'>Próxima Etapa:</span> {stages?.filter((stage) => stage.stage === progress.completedStages + 1)[0].route}</p>
                                <p className="letter-stats-next"><span className='title-stats'>Distancia:</span> {stages.filter((stage) => stage.stage === progress.completedStages + 1)[0].distance_km}</p>
                                <p className="letter-stats-next"><span className='title-stats'>Descripción:</span> {stages.filter((stage) => stage.stage === progress.completedStages + 1)[0].description ?? "Ni hemos salido de casa, ¡a darle caña!"}</p>

                            </span>
                        </span>
                    </Grid>

                </Grid >}
        </>
    )
}

export default Stats