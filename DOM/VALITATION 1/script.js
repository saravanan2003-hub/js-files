// form gets
const form=document.querySelector('#form');
const username=document.querySelector('#username');
const Email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector("#cpassword");
//add eventlistener
form.addEventListener('submit',(Event)=>{
    if(!validateInputs()){
        Event.preventDefault();
    };
})
function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal = Email.value.trim()
    const passwordVal=password.value.trim()
    const upasswordVal=cpassword.value.trim();
    let succes=true;
    if(usernameVal===''){
        succes=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    //Email valitation
    if(emailVal===''){
        succes=false;
        setError(Email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        succes=false;
        setError(Email,"please enter your valid email ")
    }
    else{
        setSuccess(Email)
    }
    

    //password valitation
    if(passwordVal===''){
        succes=false;
        setError(password,"password is required")
    }
    else if(passwordVal.length<8){
        succes=false;
        setError(password,'Password must be atleast 8 cherecters ')
    }
    else{
        setSuccess(password)
    }

    //confrim password valitation
    if(upasswordVal===''){
        succes=false;
        setError(cpassword,"Confirm password is required")
    }
    else if(upasswordVal!==passwordVal){
        succes=false;
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return succes;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error')
    errorElement.innerText= message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error')
    errorElement.innerText= ' ';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
const validateEmail =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};






