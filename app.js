function signup(){
    
    const email = document.querySelector('#S-email').value
    const pass = document.querySelector('#S-pass').value
    if(email === "" || pass === "" ){
        alert('Please Enter Email & Password');
    }else{
        localStorage.setItem('Email',email)
        localStorage.setItem('Password',pass)
        window.location = 'signin.html'
        email = ''
        pass = ''
    }
   
   

}
//=========================SignIn==========================>>
function signin(){
    const email = document.querySelector('#l-email').value
    const pass = document.querySelector('#l-pass').value
    if(email === "" || pass === ""){
        alert('Please Enter Email & Password');
    }else{
        if(localStorage.getItem('Email')===email && localStorage.getItem('Password')===pass){
            window.location= 'welcome.html'
        }else{
            alert('Not Found');
            window.location = 'index.html'
        }
        email = ""
        pass = ''
    }

    
    
    
}

//=============================Logout Work=====================>>

function logout(){
    localStorage.clear();
    window.location = 'index.html'
}