import Button from "@mui/material/Button";
import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import SendIcon from '@mui/icons-material/Send';
import {IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";


export const MuiButton = () => {
    const [formats,setFormats] = useState([])
    console.log(formats)
    const handleFormatChange = (e,array) => {
        console.log("array",array)
        setFormats(array)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='#'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={3} direction="row">
                <Button variant='contained' color="primary">primary</Button>
                <Button variant='text' color="primary">primary</Button>
                <Button variant='contained' color="secondary">secondary</Button>
                <Button variant='text' color="secondary">secondary</Button>
                <Button variant='contained' color="error">error</Button>
                <Button variant='contained' color="warning">warning</Button>
                <Button variant='contained' color="info">info</Button>
                <Button variant='contained' color="success">success</Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant='contained' size="small">contained</Button>
                <Button variant='contained' size="medium">contained</Button>
                <Button variant='contained' size="large">contained</Button>

            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant='text' startIcon={<SendIcon/>}>send</Button>
                <Button variant='outlined' startIcon={<SendIcon/>}>send</Button>
                <Button variant='contained' endIcon={<SendIcon/>} disableElevation>send</Button>
                <IconButton aria-label="send" color='secondary' size="small">
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack direction="row">
                <ButtonGroup variant='outlined' orientation='vertical' size="small" color="secondary"
                             aria-label='alignment button group'>
                    <Button onClick={() => alert("alert")}>Left</Button>

                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small'exclusive>
                    <ToggleButton value="italic"aria-label='italic'> <FormatItalicIcon/> </ToggleButton>
                    <ToggleButton value="bold" aria-label='bold'> <FormatBoldIcon/> </ToggleButton>
                    <ToggleButton value="underlined" aria-label='underlined'> <FormatUnderlinedIcon/> </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}