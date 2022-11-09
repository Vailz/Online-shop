function change(){
    var pass = document.getElementById('pass_3');
    if(pass.type == "password"){
        pass.type = 'text';
    }
    else{
        pass.type = 'password'
    }
}

var error_4 = document.querySelector('.error_4');
var error_5 = document.querySelector('.error_5');

var border_1 = document.querySelector('.Email_Frame input');
var border_2 = document.querySelector('.Password_Frame input');

var error_6 = document.querySelector('.error_6');

document.querySelector('.Button_Frame',).onclick = function(){
    var email_2 = document.getElementById('email_2').value;
    var password_3 = document.getElementById('pass_3').value;
    if(email_2 == ""){
        if (password_3 == "")
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '1px solid #FF4444';
            border_2.style.border = '1px solid #FF4444';
            return false
        }
        else
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '0%';
            border_1.style.border = '1px solid #FF4444';
            border_2.style.border = '';
            return false
        }
    }
    
    else if(!isValidEmail(email_2)){
        if (password_3 == "")
        {
        error_5.style.opacity = '100%';
        error_4.style.opacity = '0%';
        error_6.style.opacity = '100%';
        border_1.style.border = '1px solid #FF4444';
        border_2.style.border = '1px solid #FF4444';
        return false
        }
        else
        {
            error_5.style.opacity = '100%';
            error_4.style.opacity = '0%';
            error_6.style.opacity = '0%';
            border_1.style.border = '1px solid #FF4444';
            border_2.style.border = '';
            return false 
        }
    }
    else if(password_3 == ""){
        if (email_2 == "")
        {
            error_4.style.opacity = '100%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '1px solid #FF4444';
            border_2.style.border = '1px solid #FF4444';
            return false
        }
        else
        {
            error_4.style.opacity = '0%';
            error_5.style.opacity = '0%';
            error_6.style.opacity = '100%';
            border_1.style.border = '';
            border_2.style.border = '1px solid #FF4444';
            return false
        }
    }
    else {
        error_4.style.opacity = '0%';
        error_5.style.opacity = '0%';
        error_6.style.opacity = '0%';
        border_1.style.border = '';
        border_2.style.border = '';
        return true
    }
}

const isValidEmail = email_2 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_2).toLowerCase());
}
