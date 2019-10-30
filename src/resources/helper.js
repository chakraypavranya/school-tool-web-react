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