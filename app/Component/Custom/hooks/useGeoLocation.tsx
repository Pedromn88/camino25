import { useState, useCallback } from "react";

type Location = {
    latitude: number;
    longitude: number;
    accuracy?: number;
};

export function useGeolocation() {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loadingLocation, setLoadingLocation] = useState(false);

    // -----------------------------------
    // Devuelve la ubicación como Promise
    // -----------------------------------
    const getLocation = useCallback(async (): Promise<Location | null> => {
        if (!navigator.geolocation) {
            setError("Geolocalización no soportada por el navegador");
            return null;
        }

        setLoadingLocation(true);

        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coords: Location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                    };
                    setLocation(coords);
                    setError(null);
                    setLoadingLocation(false);
                    resolve(coords);
                },
                (err) => {
                    setError(err.message);
                    setLoadingLocation(false);
                    resolve(null);
                },
                { enableHighAccuracy: true }
            );
        });
    }, []);

    console.log(location);

    return {
        location,
        error,
        loadingLocation,
        getLocation,
    };
}