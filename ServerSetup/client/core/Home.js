import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card'
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import bikepng from '../assets/images/bike.jpg'
const useStyles = makeStyles(theme=>({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
        },
        title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
       ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
        },
        media: {
        minHeight: 400
        }
       
}))

export default function Home(){
    const classes = useStyles()
    return (
        <div>
            <h1>Hello my name is</h1>
        </div>
    )
}




