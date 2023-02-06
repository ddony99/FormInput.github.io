
// check form valid request email/Password

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
e.preventDefault()
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const showPassword = document.querySelector("#showpassword")
const passwordConfirm = document.querySelector('#passwordConfirm')

if (
    !email.checkValidity() ||
    !password.checkValidity()
) {
    alert('Please fill out all fields correctly.')
    return
}else{
    alert('Form submitted succesfully!')
}
   
})


/* const password = document.getElementById("password");
const current = document.getElementById("current");
const scales = document.getElementById("scales");

/* password.oninput = (event) => {
  current.textContent = password.value;
} */

/* const cb = document.querySelector('#scales');
console.log(cb.checked); // false

if( cb.checked == true){
    password.oninput = (event) => {
        current.textContent = password.value;
      }

}

cb.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="pss"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(values);
});  */ 



 //DOM Reference

const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#passwordConfirm')
const showpassword = document.querySelector("#showpassword")
const password2 = document.querySelector('#password2')
const passwordConfirm2 = document.querySelector('#passwordConfirm2')
const showPassword2 = document.querySelector("#showpassword2")


/*  //firstForm
//password.value = "Doe"
//toggle using click to make work cross browser
showpassword.addEventListener("click", handleToggleClick, false);
// toggle click, changing the Type of paswword input
function handleToggleClick(event){
    if(this.checked){
        console.warn("Change input 'type' to : text")
        password.type = "text"
      
    }else{
        console.warn("Change input 'type' to passsord")
        password.type = "password"
      
    }
} */

//SecondForm
//password.value = "Doe"
//toggle using click to make work cross browser
showPassword2.addEventListener("click", handleToggleClick, false);
// toggle click, changing the Type of paswword input
function handleToggleClick(event){
    if(this.checked){
        console.warn("Change input 'type' to : text")
        password2.type = "text"
        passwordConfirm2.type = "text"
    }else{
        console.warn("Change input 'type' to passsord")
        password2.type = "password"
        passwordConfirm2.type = "password"
    }
}
