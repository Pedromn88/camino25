"use client";

import { useState, useCallback, useEffect } from "react";
import getCount from "../../getFire";
import incrementCount from "../../postFire";

export const useInitial = (type: string) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);

    const fetchCount = useCallback(async () => {
        setLoading(true);
        try {
            const aux: { count?: number; limits?: number } = await getCount(type);
            if (aux) {
                setCount(aux.count ?? 0);
                setLimit(aux.limits ?? 0);
            }
        } catch (error) {
            console.error(`Error fetching ${type}:`, error);
        } finally {
            setLoading(false);
        }
    }, [type]);

    useEffect(() => {
        fetchCount();
    }, [fetchCount]);

    const saveLimit = async () => {
        setLoading(true);
        try {
            await incrementCount(type, "limits", limit, null);
        } catch (error) {
            console.error(`Error saving limit for ${type}:`, error);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        count,
        limit,
        setLimit,
        saveLimit,
    };
};
