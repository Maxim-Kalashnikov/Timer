let deadline = '2030-07-09';
Clock(deadline);
function Clock(deadline){
    
    const addZero =(num)=>{
        if(num <= 9){
            return'0'+num
        }else{
            return num;
        }

    };

    const getTime =(endTime)=>{
         const t = Date.parse(endTime) - Date.parse(new Date()),
                second = Math.floor((t/1000)%60),
                minuts = Math.floor((t/1000/60)%60),
                hours = Math.floor((t/(1000*60*60))%24),
                days = Math.floor((t/(1000*60*60*24)));

        return{
            'total':t,
            'days':days,
            'second':second,
            'minuts':minuts,
            'hours':hours
        };
    };
    const setClock = (endTime)=>{
        const days = document.querySelector('#days'),
              hours= document.querySelector('#hours'),
              seconds = document.querySelector('#seconds'),
              minutes = document.querySelector('#minuts'),
              timerInterval = setInterval(updateClock,1000);


              function updateClock(){
                  const t = getTime(endTime);

                  days.textContent = addZero(t.days);
                  hours.textContent =addZero(t.hours);
                  seconds.textContent = addZero(t.second);
                  minutes.textContent = addZero(t.minuts);

                  if(t.total <=0){
                    days.textContent = '00';
                    hours.textContent = '00';
                    seconds.textContent = '00';
                    minutes.textContent = '00';

                    clearInterval(timerInterval);
                  }
              }

    };
    setClock(deadline);
};

