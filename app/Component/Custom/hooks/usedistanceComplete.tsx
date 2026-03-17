"use client"

import { useEffect, useState } from "react";

export type TravelStage = {
    stage: number;
    route: string;
    distance_km: number;
    description: string;
};

export type Stage = {
    stage: number;
    distance: number;
};

export type Progress = {
    kmCompleted: number;
    totalKm: number;
    percentage: number;
    completedStages: number;
    currentStage?: Stage;
};

export const useCaminoProgress = (stagesArray: TravelStage[]): Progress => {
    const stages: Stage[] = stagesArray.map(s => ({
        stage: s.stage,
        distance: s.distance_km,
    }));

    const [progress, setProgress] = useState<Progress>({
        kmCompleted: 0,
        totalKm: stages.reduce((acc, s) => acc + s.distance, 0),
        percentage: 0,
        completedStages: 0,
        currentStage: stages[0],
    });

    useEffect(() => {
        const updateProgress = () => {
            const startDate = new Date("2026-03-27");
            const today = new Date();

            startDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            const diffTime = today.getTime() - startDate.getTime();
            const daysPassed = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

            const completedStages = Math.min(daysPassed, stages.length);

            const kmCompleted = stages
                .slice(0, completedStages)
                .reduce((acc, s) => acc + s.distance, 0);

            const totalKm = stages.reduce((acc, s) => acc + s.distance, 0);

            const currentStage = stages[completedStages] ?? stages[stages.length - 1];

            setProgress({
                kmCompleted,
                totalKm,
                percentage: totalKm > 0 ? (kmCompleted / totalKm) * 100 : 0,
                completedStages,
                currentStage,
            });
        };

        updateProgress();
        const interval = setInterval(updateProgress, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, [stagesArray]);

    return progress;
};