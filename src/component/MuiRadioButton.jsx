import React, {useState} from "react";
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from '@mui/material'
export default function MuiRadioButton() {
    const [value,setValue] = useState('')
    console.log({value})

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <Box>
            <FormControl>
                <FormLabel>Year of experience</FormLabel>
                <RadioGroup name='job-experience-group-label' aria-labelledby='job-experience-group-label' onChange={handleChange}
                row>
                    <FormControlLabel control={<Radio size='small' color='primary'/>} label="0-2" value='0-2'/>
                    <FormControlLabel control={<Radio color='secondary'/>} label="3-5" value='3-5'/>
                    <FormControlLabel control={<Radio  color='success'/>} label="6-10" value='6-10'/>
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )

}