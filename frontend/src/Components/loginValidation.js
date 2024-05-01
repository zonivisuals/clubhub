function validation(values){
    let error = []
    
    if(values.email === "")
        error.email = "email should not be empty"
    else
        error.email = ""


        if(values.password === "")
        error.email = "password should not be empty"
    else
        error.email = ""

    return error
}

export default validation