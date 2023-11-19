// all elements

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form=document.querySelector("#form");

const showError = (input, message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroIcon = parentElement.querySelectorAll("i")[1];

    erroIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText= message;
}
const showkkSuccess = (input, message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const erroIcon = parentElement.querySelectorAll("i")[1];

    erroIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
    small.innerText= message;
}

const checkEmpty=(elemensts) => {
    elemensts.forEach( (element) => {
        if(element.value===''){
           showError(element,'input  required');
        } 
        else{
            showkkSuccess(element);
        }
        
    });
}
const checkEmail = (email) =>{
    const reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(email.value)){
        showkkSuccess(email);
    }
    else{
        showError(email,'Invalid email')
    }
};

const checkPasswordLength = (input, min,max) =>{
    if(input.value.length< min ){
        showError(input, `password at least ${min} charecter`)
    }
    else if(input.value.length > max){
        showError(input, `password maximud character is ${max} `)
    } 
    else{
        showkkSuccess(input);
    }
}
const checkConfirmPassowrd =(password,confirmPassword) =>{
       if(password.value !== confirmPassword.value){
        showError(confirmPassword,'password does not much')
       }
}


form.addEventListener("submit",(event) => {
    event.preventDefault();
  
    checkEmpty([username,email,password,confirmPassword])
    checkEmail(email);

    checkPasswordLength(password,6,20)
    checkPasswordLength(confirmPassword,6,10)
    checkConfirmPassowrd(password,confirmPassword);

    
});
