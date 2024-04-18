const passwordBox= document.getElementById("password");
const lenght= 12;
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number="123456789";
const symbol="@#$%ì&*()_+°|}{[]></-=";  

const allChars=upperCase+ lowerCase+number+symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword() {
    var passwordBox = document.getElementById("password"); 

    passwordBox.select();

    try {
        navigator.clipboard.writeText(passwordBox.value).then(function() {
            console.log('Testo copiato negli appunti con successo');
        }).catch(function(err) {
            console.error('Errore durante la copia del testo negli appunti', err);
        });
    } catch (err) {
        console.error('Errore durante la copia del testo negli appunti', err);
    }
}


