function validateregister()
{
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var birthdate = document.getElementById("birthdate").valueAsDate
    var gender = document.getElementById("gender").value
    var payment = document.getElementById("payment").value

    if(fullname == "" || password == "" || email == ""
    || birthdate == null || gender == "" || payment == "")
    {
        alert("No Empty Field Please")
    }
    else if(gender == "default")
    {
        alert("Please Choose a Gender")
    }
    else if(payment == "default")
    {
        alert("Please Choose a Payment")
    }



}