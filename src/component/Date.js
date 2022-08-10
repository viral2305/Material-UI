import React, {useState} from "react";

export default function Data() {
const [weekDay,setWeekDay] = useState([])
const [url,setURl] = useState()
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  const handleChange = (event) => {
    var filesSelected =event.target.files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
      const url = fileReader.result;
      setURl(url)
      }, false);
       fileReader.readAsDataURL(fileToLoad);
    }
  }

  function formatDate(date) {

    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }
  var week = []
  const todayDate = new Date()
  const weekData = async ()=> {



    for(let i=0; i < 8; i++ ){
      var prev1 = new Date(new Date().getTime() -1)
      prev1.setDate(new Date().getDate() - i)
      console.log(formatDate(prev1))
      const formatedDate = await formatDate(prev1)
      week.unshift(formatedDate)
    }
    console.log('weekDay',week)

  }
  var month1 = [];
  const monthData = async () => {

    for(let i=0; i < 31; i++ ){
      var prev1 = new Date(new Date().getTime() -1)
      prev1.setDate(new Date().getDate() - i)
      console.log(formatDate(prev1))
      const formatedDate = await formatDate(prev1)
      month1.push(formatedDate)
    }
        console.log('month',month1)
  }

  // let month = todayDate.getMonth() + 1;
  //   // console.log('month',month)
  //   // let preMonth = new Date(todayDate.getFullYear(),month,todayDate.getDate()-i)
  //   // console.log('premonth',preMonth)
  //   // let formetMonth = await formatDate(preMonth)
  //   // console.log('formetMonth',formetMonth)
  //   // month1.push(formetMonth)

  return(
    <>
      <button style={{width: '50px',height: '50px'}} onClick={weekData}/>
      <button style={{width: '50px',height: '50px'}} onClick={monthData}/>
      <input id='inputFileToLoad' type='file' alt='school' onChange={handleChange}/>
      <img src={url} width='400px' height='400px'/>
      <div id="imgTest" ></div>

      </>
  )
}