const result= document.getElementById('result')

const olympictime= new Date(2028,6,14).getTime() //month:July // time in ms 

setInterval(()=>{

      const currenttime = Date.now() //time in ms 

      let timer= olympictime-currenttime //ms 

      const day= Math.floor((timer)/(1000*60*60*24))  // 1 day = 24 hr * 60 min * 60 sec * 1000 ms 

      timer%=(1000*60*60*24)

      const hour = Math.floor((timer)/(1000*60*60))  // 1 hour = 60 min * 60 sec * 1000ms
      timer%=(1000*60*60)

      const minute=Math.floor((timer)/(1000*60))  //1 min = 60sec * 1000ms 
      timer%=(1000*60)

      const second=Math.floor((timer)/(1000)) //1 sec= 1000ms
      timer%=1000 


     result.textContent = `${day}:Days ${hour}:Hour  ${minute}:Minute ${second}:Second`


},1000)






