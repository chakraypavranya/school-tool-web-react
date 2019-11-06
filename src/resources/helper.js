export const getTokenId = () =>{
    const auth = window.gapi.auth2.getAuthInstance();
    const tokenID = auth.currentUser.get().getAuthResponse().id_token;
    return tokenID;
}

export const InitiateGoogleSignIn = () =>{
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId: '796856575083-f5ssvve0fmi5nm4bmftbc5aebhmhvrba.apps.googleusercontent.com',
            scope:'profile'
        }).then(()=>{
            const auth = window.gapi.auth2.getAuthInstance();
            return auth;
        });
    });
}

export const convertToHtmlDate =(dateString, format)=>{
    const date = new Date(dateString);
    const day = date.getDate() < 10? '0'+date.getDate(): date.getDate();
    const month = date.getMonth() < 10? '0'+date.getMonth(): date.getMonth();
    const year = date.getFullYear();

    switch(format){
        case 'DD-MM-YYYY':
            return `${day}-${month}-${year}`;
            break;
        case 'MM-DD-YYYY':
            return `${month}-${day}-${year}`;
            break;
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
            break;
        default:
            return `${year}-${month}-${day}`;
            break;
    }
}

export const populateEventObj = ({id,startDate,endDate,startTime,endTime,isDay,name,description})=> {
    const eventObj = {
        id,
        startDate,
        endDate,
        startTime,
        endTime,
        isDay,
        name,
        description
    }
    return eventObj;
}