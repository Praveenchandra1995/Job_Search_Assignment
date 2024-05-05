const Info=
fetch("https://api.weekday.technology/adhoc/getSampleJdJSON")
 .then((response) => response.text())
 .then(data=>{
    console.log(data)
 })

 console.log(Info)