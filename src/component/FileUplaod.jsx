import React, {createElement, useState} from "react";

export default function FileUplaod(){
const [file,setFile] = useState({})
  console.log('file',file)

  const handleClick = () => {
    var el = document.createElement("a");
    el.setAttribute("href", file.image);
    el.setAttribute("download", 'image.jpeg');
    document.body.appendChild(el);
    el.click();
    el.remove();
  }
  return(
    <div>
      <label>please upload file</label>
      <input type={'file'} onChange={(e) => setFile({image: URL.createObjectURL(e.target.files[0])})}/>
      <button onClick={handleClick}>download upload image</button>
    </div>
  )

}