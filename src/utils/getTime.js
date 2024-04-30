const getFormattedDate = (value, type, inMS) => {

    // If user not send type of the provided value
    if(!type) return value;

    // If provided value is not in milliseconds
    if(!inMS){
        value = value * 1000;
    }

    const date = new Date(value);
    let options;

    if(type === 'date'){
         options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    } else if(type === 'time'){
        options ={
            hour: "numeric",
            minute: "numeric",
        }
    }
    // const formatedDate = date.toLocaleDateString('en-us', options);
    // return formatedDate;
    return new Intl.DateTimeFormat("en-us", options).format(date);
}


export default getFormattedDate;