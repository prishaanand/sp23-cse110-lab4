//Part 2: Question 18

function printSeconds(){

    let d = new Date(); 
    let time = d.toLocaleTimeString();
    console.log(time);

}

//want to print out time every second
setInterval(printSeconds, 1000);