import React from 'react'
import GoogleLogin from 'react-google-login' ;

function GoogleAuth() {

    const responseGoogle = (response) => {
        console.log(response);
    }
    
    return (
        <GoogleLogin
            clientId=""
            buttonText="Continue with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleAuth
