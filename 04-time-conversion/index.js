let input = '07:05:45AM'
console.log(input[8])

const tc = time => {
    //check to see if AM or PM
    //split on :
    //add 12 to first element of array
    
    //assigning am or pm to variable
    const amPM = time[8]
    //splitting on :
    time = time.split(':')
    //removing the last two letters
    time[2] = time[2].slice(0,-2);
    //if/else to check if PM and adding 12 to first element of array
    if(amPM==='P'){
        //converting to integer to add 12 if item is PM
        time[0] = parseInt(time[0]) + 12;
        //converting back to string
        time[0] = time[0].toString()
        //joining all elements on :
        time = time.join(':')
        console.log(time) 
    }else{
        time = time.join(':')
        console.log(time)
    }

}

tc(input)