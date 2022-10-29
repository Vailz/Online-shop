function change(){
    var pass = document.getElementById('pass');
    if(pass.type == "password"){
        pass.type = 'text';
    }
    else{
        pass.type = 'password'
    }
}

function change_2(){
    var pass_2 = document.getElementById('pass_2');
    if(pass_2.type == "password"){
        pass_2.type = 'text';
    }
    else{
        pass_2.type = 'password'
    }
}