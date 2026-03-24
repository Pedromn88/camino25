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
    currentStage?: number | 0;
};

