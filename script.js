// used a query selector  and class to select the  tag
let count=document.querySelector(".main");
// firstly,declared the variable countdown and and set the initial countdown to 10 and displayed it
let countdown=10;
count.innerHTML=countdown--;
//used settimeout to decrement the  value of the countdown  by 1 for every 1000ms and displayed the message at last
//below  code is call back function which creates callback hell
setTimeout(() => {
count.innerHTML=countdown--;
setTimeout(() => {
    count.innerHTML=countdown--;
    setTimeout(() => {                            
        count.innerHTML=countdown--;
        setTimeout(() => {
            count.innerHTML=countdown--;
            setTimeout(() => {
                count.innerHTML=countdown--;
                setTimeout(() => {
                    count.innerHTML=countdown--;
                    setTimeout(() => {
                        count.innerHTML=countdown--;
                        setTimeout(() => {
                            count.innerHTML=countdown--;
                            setTimeout(() => {
                                count.innerHTML=countdown--;
                                setTimeout(() => {
                                    count.innerHTML="Happy Independence day"
                                    
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
