import {Typography} from "@mui/material";
import React from "react";

export default function MuiTypography() {
    return (
        <div>
            <Typography variant='h1' component="h1" gutterBottom>h1 heading</Typography>
            <Typography variant='h2' gutterBottom>h1 heading</Typography>
            <Typography variant='h3' gutterBottom>h1 heading</Typography>
            <Typography variant='h4' component="h1" gutterBottom>h1 heading</Typography>
            <Typography variant='h5' gutterBottom>h1 heading</Typography>
            <Typography variant='h6' gutterBottom>h1 heading</Typography>
            <Typography variant='subtitle1' gutterBottom >subtitle1</Typography>
            <Typography variant='subtitle2' gutterBottom>subtitle2</Typography>

            <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
            <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
        </div>

    )

}