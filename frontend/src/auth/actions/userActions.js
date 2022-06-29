import axios from 'axios'
import { sessionService } from 'redux-react-session';

// local endpoint 

const localUrl ="http://localhost:5008"
const currentUrl = localUrl

// login user action
export const loginUser = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) => {
    // Make checks and get some data 
    return () => {
    axios.post(`${currentUrl}/user/signin`,credentials,
    {
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response)=> {
        const {data} = response;

        if (data.status === "FAILED"){
            const {message} = data
            
            // check for specific error 
            if (message.includes("credentials")){
                setFieldError("email", message)
                setFieldError("password", message)
            }else if (message.toLowerCase().includes("password")){
                setFieldError("password", message)
            }else if (message.toLowerCase().includes("email")){
                setFieldError("email", message)
            }
        }else if (data.status === "SUCCESS"){
            const userData = data.data[0]
            
            localStorage.setItem("user_id",userData._id )
            const token = userData._id
            sessionService.saveSession(token).then(()=>{
                sessionService.saveUser(userData).then(()=>{
                    history.push("/dashboard")
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
            
        }

        // complete submission 
        setSubmitting(false)

    }).catch(err => console.error(err))
}
}

//get user id
export const getCurrentUserId = ()=>{
    return localStorage.getItem("user_id")
}
// signup user action 

export const signupUser = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) =>  {
    return (dispatch) => {
    axios.post(`${currentUrl}/user/signup`,credentials,
    {
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response) => {
        const {data}= response

        if(data.status === "FAILED"){
            const {message} = data

            // checking for specific error 
            if(message.includes("email")){
                setFieldError("email", message)
            }else if (message.includes("password")){
                setFieldError("password",message)
            }
        }else if (data.status === "PENDING"){
            // display message for email verification
            const {email} = credentials
            history.push(`/emailsent/${email}`)
            
        }
        // Complete submission 
        setSubmitting(false)
    }).catch(err => console.error(err))
}
}

// Logout user action 

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession()
        sessionService.deleteUser
        history.push("/home")
    }
}


// forgotten password action 
export const forgottenPassword = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) => {
    // Make checks and get some data 

    
    return () => {
    axios.post(`${currentUrl}/user/requestPasswordReset`,credentials,
    {
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response)=> {
        const {data} = response;

        if (data.status === "FAILED"){
            const {message} = data

            // check for specific error 
            if (
                message.toLowerCase().includes("user") || 
                message.toLowerCase().includes("password") || 
                message.toLowerCase().includes("email")
            ){
                setFieldError("email", message)
            }
        }else if (data.status === "PENDING"){
            const {email} = credentials
            history.push(`/emailsent/${email}/${true}`)
        }

        // complete submission 
        setSubmitting(false)

    }).catch(err => console.error(err))
}
}

// actual reset 
export const resetPassword = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) => {
    // Make checks and get some data 

    
    return () => {
    axios.post(`${currentUrl}/user/resetPassword`,credentials,
    {
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response)=> {
        const {data} = response;

        if (data.status === "FAILED"){
            const {message} = data

            // check for specific error 
            if (
                message.toLowerCase().includes("password")
            ){
                setFieldError("newPassword", message)
            }
        }else if (data.status === "SUCCESS"){
            history.push(`/emailsent`)
        }

        // complete submission 
        setSubmitting(false)

    }).catch(err => console.error(err))
}
}

/* export const updateUser = (
    setSubmitting,

) => {
    return async (dispatch , getState) => {
        try {
            dispatch({
                type: USER_UPDATE_REQUEST,
            })

            const {userData} = getState().userLogin
        } catch (error) {
            
        }
    }
} */