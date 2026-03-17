import { Grid } from '@mui/material'
import React from 'react'
import BeerIcon from '../Component/svg/BeerIcon';
import LoveIcon from '../Component/svg/LoveIcon';
import OctopusIcon from '../Component/svg/OctopusIcon';
import { lastYear } from '../Component/utils/constant';
import './historicalStyle.scss'

const Historical = () => {


    const getIcon = (type: string) => {
        switch (type) {
            case "beer":
                return <BeerIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;
            case "love":
                return <LoveIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;
            case "octopus":
                return <OctopusIcon width="20" height="20" fillHeight={0} fillOpacity="1" />;
            case "km":
                return <img src="/hiking.png" alt="" width="20" height="20" />
            default:
                return;
        }
    }

    return (
        <>
            <Grid container className="w-100">
                <Grid size={12} className="flex-center-column ">
                    <h1 className='title-stats'>...En anteriores Camiños</h1>
                </Grid>
                <Grid size={12} className="flex-center-column ">
                    <h1 className='title-stats'>2025</h1>
                </Grid>
                <Grid container className="w-100 flex-center">
                    {lastYear?.map((item, i) => (
                        <Grid size={6} key={i} className='card-stats'>
                            <div className={`avatar avatar-stats ${item.type === "octopus" ? "octo-bg-color" : item.type === "beer" ? "beer-bg-color" : item.type === "km" ? "km-bg-color" : "love-bg-color"}`}>
                                {getIcon(item.type)}
                            </div>
                            <span className='title-stats'>
                                <p>{item.title}</p>
                            </span>
                            <span className='title-stats'>
                                <p>{item.count}</p>
                            </span>
                        </Grid>
                    ))}

                </Grid>
            </Grid>
        </>
    )
}

export default Historical