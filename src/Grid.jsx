import React from "react"
import {useMediaQuery} from "@mui/material";

export default function Grid() {

  const main = {
     display: 'grid',
    // gridTemplateAreas: "'first second second' 'third third third'"
    gridTemplateAreas: "'first first first' 'third third third' 'second second second"

  }

  const first = {
    // gridColumn: "1/4",
    gridRow: "1",
    gridArea: 'first',
  }

  const second = {
    // gridColumn: "1/6",
    gridRow: 3,
    gridArea: 'second',
    // gridRow: 1

  }

  const third = {
    gridArea: 'third',
    gridRow: 2
  }
  return(
    <>
    <div style={main}>
      <div style={first}>first dsfdas dsfs dafasd fdasfdas fdsf ds fdsf fdasfdas fdsf ds fdsf</div>
      <div style={second}>second vdsfdas dsfs dafasd dsfdas dsfs dafasd</div>
      <div style={third}> third third third third third third third third third third third third third third third third third third </div>
    </div>

      </>
  )

}