import React from "react";
import {Box, Card, CardContent, Typography,CardActions,Button,CardMedia} from "@mui/material"

export default function MuiCard() {
    return (
        <Box width='300px'>
            <Card variant='outlined'>
                <CardMedia component='img' height='140'
                           image='https://source.unsplash.com/random'
                           alt='unplash'/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React </Typography>
                    <Typography gutterBottom variant='body2' color='text.secondary'>React dfhjalkj kjadhf
                        adshfdhjasfjdas fdhdkjshf dsfk </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learen more</Button>
                </CardActions>
            </Card>
        </Box>
    )

}