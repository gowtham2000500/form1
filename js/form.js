function validation() {
    var firstName = document.getElementById('firstName').value;
    if(firstName == ""){
        document.getElementById('first').innerHTML = " ** FirstName cannot be Empty";
    }
    else
    document.getElementById('first').innerHTML = "";

    var lastName = document.getElementById('lastName').value;
    if(lastName == ""){
        document.getElementById('last').innerHTML = " ** lastName cannot be Empty";
    }
    else
    document.getElementById('last').innerHTML = "";

    var password = document.getElementById('password').value;
    if(password == ""){
        document.getElementById('pass').innerHTML = " ** Password cannot be Empty";
    }
    else
    document.getElementById('pass').innerHTML = "";

    

    }

