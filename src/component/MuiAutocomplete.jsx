import React, {useState} from "react";
import {Stack, Autocomplete, TextField} from "@mui/material";

export default function MuiAutoComplete() {
    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState({id: '',label: ""} || null)
    const skills = ['html', 'css', 'javascript', 'python', 'core', "csor"]
    const skillsOption = skills.map((skill, index) => (
            {
                id: index + 1,
                label: skill,
            }
        )
    )
    // console.log('value', value)
    console.log('skill', skill)
    const handleChange = (e, newvalue) => {
        setValue(newvalue)
    }
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete renderInput={(params) => <TextField {...params} label='skills'/>} options={skills}
                          value={value} onChange={handleChange} freeSolo/>
            <Autocomplete renderInput={(params) => <TextField {...params} label='skills'/>} options={skillsOption}
                          value={skill} onChange={(e,newvalue) => setSkill(newvalue)} />

        </Stack>
    )

}