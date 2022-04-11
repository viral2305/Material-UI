import React, {useState} from "react";
import {Box,FormControlLabel,Checkbox,FormLabel,FormControl,FormGroup} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export default function MUiCheckbox() {
    const [acceptTnc,setAcceptTnc] = useState(false)
    const [skills,setSkills] = useState([])
    console.log(skills)
    const handleChange = (e)=> {
        setAcceptTnc(e.target.checked)
    }
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills,e.target.value])
        } else  {
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }
    return(
        <Box>
            <Box>
                <FormControlLabel control={<Checkbox checked={acceptTnc} onChange={handleChange}/>} label='I accept terms and  condition'/>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnc} onChange={handleChange}/>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={skills.includes('HTML')}  value='HTML' onChange={handleSkillChange}/>} label='Html'/>
                        <FormControlLabel control={<Checkbox checked={skills.includes('css')} value='css' onChange={handleSkillChange}/>} label='Css'/>
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )

}

