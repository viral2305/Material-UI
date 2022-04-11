import React, {useState} from "react";
import {Box,FormControlLabel,Switch} from "@mui/material";

export default function MuiSwitch() {
    const [checked,setChecked] = useState(false)
    console.log(checked)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    return(
        <Box>
            <FormControlLabel label='dark Mode' control={<Switch checked={checked} onChange={handleChange} size='small'/>}/>
        </Box>
    )

}