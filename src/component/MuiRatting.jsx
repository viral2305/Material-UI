import React, {useState} from "react";
import {Stack, Rating} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function MuiRatting() {
    const [value, setValue] = useState( null ||3)
    console.log("value", value)
    const handleChange = (e, newvalue) => {
        setValue(newvalue)
    }
    return (
        <Stack spacing={2}><Rating value={value} onChange={handleChange} precision={0.1} size='large'
                                   icon={<FavoriteIcon fontSize='inherit'/>}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit'/> }  highlightSelectedOnly/></Stack>
    )

}