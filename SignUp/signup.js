

let userName=document.querySelector('.username');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let confirmPassword=document.querySelector('.confirmPassword');
let signupBtn=document.querySelector('.signupBtn');
let input=document.querySelector('input')

let userNameError=true;
let emailError=true;
let passwordError=true;
let confirmPasswordError=true;


signupBtn.addEventListener('click',function(){
    validate();
})

function showError(input,msg)
{
    let parentInput=input.parentElement.parentElement
    let errorMessage=parentInput.querySelector('.error')
    errorMessage.style.display='block'
    errorMessage.innerHTML=msg
}

function hideError(input)
{
    let parentInput=input.parentElement.parentElement
    let errorMessage=parentInput.querySelector('.error')
    errorMessage.style.display='none'
}

function validate()
{
    
    globalThis.userNameValue=userName.value;
    let emailValue=email.value;
    let passwordValue=password.value;
    let confirmPasswordValue=confirmPassword.value;

    userNameRegex=/^[a-z]+[a-z0-9]*[a-z]+$/gi;
    globalThis.usernameValidation = userNameRegex.test(userNameValue);

    const emailRegex=/^\w+@\w+\.\w+$/gi;
    let emailValidation = emailRegex.test(emailValue);

    passwordRegex=/^[\w\W]{8,}$/gi;
    let passwordValidation = passwordRegex.test(passwordValue);

    let userData={
        username:userNameValue,
        email:emailValue,
        password:passwordValue,
        password_confirmation:confirmPasswordValue
    }
    

    
    if(userNameValue.length==0)
    {
        showError(userName,'The username field is required');
    }
    else if(userNameValue.length<5 || userNameValue.length>15)
    {
        showError(userName,'Username must consist of 5 to 15 characters');

    }
    else if(!usernameValidation)
    {
        showError(userName,'user name is not validated');
    }
    else
    {
        hideError(userName);
        userNameError=false;
    }
///////////////////////////////////////////////
    if(emailValue.length==0)
    {
        showError(email,'The email field is required');
    }
    
    else if(!emailValidation)
    {
        showError(email,'email is not validated');

    }
    else
    {
        hideError(email);
        emailError=false;
    }
    /////////////////////////////////////////////////

    if(passwordValue.length==0)
    {
        showError(password,'The password field is required')
    }
    
    else if(!passwordValidation)
    {
        showError(password,'password is not validated')
    }
    else
    {
        hideError(password);
        passwordError=false;
    }
    ////////////////////////////////////////////////
    if(confirmPasswordValue.length==0)
    {
        showError(confirmPassword,'confirmpassword is empty')
    }
    
    else if(confirmPasswordValue!=passwordValue)
    {
        showError(confirmPassword,'confirmpassword and password must be the same')

    }
    else
    {
        hideError(confirmPassword);
        confirmPasswordError=false;
    }

    if(!userNameError && !emailError && !passwordError && !confirmPasswordError)
    {

        (async () => {
            let options=
            {
                method:"post",
                headers:
                {
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(userData)
            }
            const allData = await fetch('https://goldblv.com/api/hiring/tasks/register',options) 
            const response = await allData.json();
            if(!response.errors)
                localStorage.setItem('userEmail',response.email);
                window.location.href='../Succeed/succeed.html';
          })();
            userNameError=true;
            emailError=true;
            passwordError=true;
            confirmPasswordErrorError=true;
    }

                             
    
}














