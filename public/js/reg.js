function change_2(){
    var pass_2 = document.getElementById('password');
    if(pass_2.type == "password"){
        pass_2.type = 'text';
    }
    else{
        pass_2.type = 'password'
    }
}


var error_1 = document.querySelector('.error_1');
var error_2 = document.querySelector('.error_2');

var error_3 = document.querySelector('.error_3');
var error_7 = document.querySelector('.error_7');

var error_8 = document.querySelector('.error_8');
var border_5 = document.querySelector('.Name_Frame input');

var border_3 = document.querySelector('.Email_Frame_2 input');
var border_4 = document.querySelector('.Password_Frame_2 input');


document.querySelector('.Button_Frame_2').onclick = function(){
    var email_1 = document.getElementById('email').value;
    var password_1 = document.getElementById('password').value;
    var name_1 = document.getElementById('firstname').value;


    if(email_1 == "")
    {
        if (password_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
        else if(password_1.length < 8){
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
        else
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '';
            error_8.style.opacity = '0%';
            border_5.style.border = '';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
    }
    else if(!isValidEmail_2(email_1)){
        if (password_1 == "")
        {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '100%';
        error_3.style.opacity = '100%';
        error_7.style.opacity = '0%';
        border_3.style.border = '1px solid #F12A2A';
        border_4.style.border = '1px solid #F12A2A';
        if(name_1 == "")
        {
            error_8.style.opacity = '100%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else{
            error_8.style.opacity = '0%';
            border_5.style.border = '';
        }
        return false
        }
        else if(password_1.length < 8){
            error_1.style.opacity = '0%';
            error_2.style.opacity = '100%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '100%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false 
        }
    }
    else if(password_1 == ""){
        if (email_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
        
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '100%';
            error_7.style.opacity = '0%';
            border_3.style.border = '';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';
            }
            return false
        }
    }
    else if(password_1.length < 8){
        if (email_1 == "")
        {
            error_1.style.opacity = '100%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '1px solid #F12A2A';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';
                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';

            }
            return false
        }
        else
        {
            error_1.style.opacity = '0%';
            error_2.style.opacity = '0%';
            error_3.style.opacity = '0%';
            error_7.style.opacity = '100%';
            border_3.style.border = '';
            border_4.style.border = '1px solid #F12A2A';
            if(name_1 == "")
            {
                error_8.style.opacity = '100%';

                border_5.style.border = '1px solid #F12A2A';
                return false
            }
            else{
                error_8.style.opacity = '0%';
                border_5.style.border = '';

            }
            return false
        }
    }    
    else
    {
        error_1.style.opacity = '0%';
        error_2.style.opacity = '0%';
        error_3.style.opacity = '0%';
        error_7.style.opacity = '0%';
        border_3.style.border = '';
        border_4.style.border = '';
        if(name_1 == "")
        {
            error_8.style.opacity = '100%';
            border_5.style.border = '1px solid #F12A2A';
            return false
        }
        else{
            error_8.style.opacity = '0%';
            border_5.style.border = '';
        }
        return true
    }
}

const isValidEmail_2 = email_1 => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_1).toLowerCase());
}