import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';

export default function Drop() {
  const [img , setImg] = useState();
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const filess = acceptedFiles.map(file =>{
    setImg([...img, {img: URL.createObjectURL(file)}])
    console.log(img)
  })

  // console.log('img',img)
  // console.log('accepted',files)
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        {img}

      </aside>
    </section>
  );
}