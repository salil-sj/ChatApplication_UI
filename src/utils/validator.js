export  const emailValidation = (email)=>{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}

export const passwordValidation = (password)=>{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return re.test(password)
}