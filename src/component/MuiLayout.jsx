import React from "react";
import {Box, Stack, Grid,Paper} from '@mui/material'
import Divider from "@mui/material/Divider";

export default function MuiLayout() {
    return (
        //stack is used for one daimention
        <Paper sx={{padding: "32px"}} elevation={7}>
            <Stack sx={{border: '1px solid'}} direction='row' spacing={2}
                   divider={<Divider orientation='vertical' flexItem/>}>
                <Box sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    width: '100px',
                    height: '100px',
                    padding: "16px",
                    "&:hover": {
                        backgroundColor: 'primary.light',
                    }
                }}>
                    codeevalution
                </Box>
                <Box display='flex' height="100px" width="100px" bgcolor='success.light' p={2}></Box>
            </Stack>
            <Grid container my={4}>
                <Grid item xs={6} md={3} ><Box bgcolor='primary.light' p={2} >Item 1</Box></Grid>
                <Grid item xs={6} md={3} ><Box bgcolor='secondary.light' p={2} >Item 2</Box></Grid>
                <Grid item xs={6} md={3} ><Box bgcolor='success.light' p={2} >Item 3</Box></Grid>
                <Grid item xs={6} md={3} ><Box bgcolor='warning.light' p={2} >Item 4</Box></Grid>
            </Grid>
        </Paper>
    )

}