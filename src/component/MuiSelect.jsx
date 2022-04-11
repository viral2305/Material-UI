import React, {useState} from "react";
import {Box, TextField, MenuItem} from "@mui/material";

export default function MuiSelect() {
    const [conuntries,setConuntries] = useState([])
    console.log("country",conuntries)

    const handleChange = (e) => {
        setConuntries(e.target.value)
    }
    return (
        <Box width='250px'>
            <TextField label='select country' select value={conuntries} onChange={handleChange} fullWidth SelectProps={{
                multiple: true
            }}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>use</MenuItem>
                <MenuItem value='AU'>ausria</MenuItem></TextField>
        </Box>
    )

}