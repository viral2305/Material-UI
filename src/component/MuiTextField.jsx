import React, {useState} from "react";
import {InputAdornment, Stack, TextField} from "@mui/material";

export default function MuiTextField() {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='name' variant='outlined'/>
                <TextField label='name' variant='filled'/>
                <TextField label='name' variant='standard'/>

            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='small secondary' size='small' color='secondary'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='small secondary' size='small' color='secondary' required value={value} error={!value}
    helperText={!value ? "Required" : "do not share your password"}
    onChange={(e) => setValue(e.target.value)}/>

                <TextField label='password' type='password' size='small' color='secondary'
    helperText='do not share password' disabled/>

                <TextField label='Read only' size='small' color='secondary' InputProps={{readOnly: true}}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}/>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
                }}/>
            </Stack>
        </Stack>
    )

}