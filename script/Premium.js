
function GetFree () {
	do{
		name = prompt('Please enter your name : ');
        if(name.length<1)	alert('Name Can\'t be Empty!');
        else if(name.length<5)	alert('Name must be at least 5 character');
    }while((name.length<1) || (name.length < 5));
    
    do{
		email = prompt('Please enter your e-mail : ');
        if(email.length<1)	alert('E-mail Can\'t be Empty!')
        if( (email.indexOf('@')) <1 || (email.indexOf('.com')) < 1 )
        alert('You entered wrong e-mail format!');
    }while((email.length<1) || (email.indexOf('@')< 1) || (email.indexOf('.com') < 1) );
    
    text = alert('Order Success!!')
    
}

function GetPremium () {
	do{
		name = prompt('Please enter your name : ');
        if(name.length<1)	alert('Name Can\'t be Empty!');
        else if(name.length<5)	alert('Name must be at least 5 character');
    }while((name.length<1) || (name.length < 5));
    
    do{
		email = prompt('Please enter your e-mail : ');
        if(email.length<1)	alert('E-mail Can\'t be Empty!')
        if( (email.indexOf('@')) <1 || (email.indexOf('.com')) < 1 )
        alert('You entered wrong e-mail format!');
    }while((email.length<1) || (email.indexOf('@')< 1) || (email.indexOf('.com') < 1) );

    do{
		month = prompt('Please enter how many months you want to subscribe : \n 1. 1 Month \n 2. 2 Months \n 3. 3 Months');
        if(month.length<1)	alert('Month Can\'t be Empty!');
        if(!(+month))alert('Input Must be a Number');
		else if((+month)<1 || (+month) > 3)alert('Number Must Between 1 and 3');
    }while(!(+month) || ((+month) < 1 || (+month) > 3));
    
    text = alert('Order Success!!')
    
}
