//variables
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(firstname.value === ''){
        errorDisplay(firstname, 'First name cannot be empty')
    }else{
        successDisplay(firstname)
    }

    if(lastname.value === ''){
        errorDisplay(lastname, 'Last name cannot be empty')
    }else{
        successDisplay(lastname)
    }

    if(email.value === ''){
        errorDisplay(email, 'Email cannot be empty')
    }else{
        successDisplay(email)
    }

    if(password.value === ''){
        errorDisplay(password, 'Password cannot be empty')
    }else if(password.value.length <= 7){
        errorDisplay(password, 'Password must be more than 7 characters')
    }else{
        successDisplay(password)
    }
})


const errorDisplay = (input, errorMsg) => {
    input.parentElement.classList.add('error')
    input.parentElement.children[1].style.display = 'inline-block';
    
    //for error messages
    let small = input.parentElement.children[2]
    small.style.display= 'flex'
    small.innerText = errorMsg
};

const successDisplay = (input) => {
    input.parentElement.classList.add('success')
    input.parentElement.children[1].style.display = 'none';
    input.parentElement.children[2].style.display = 'none'
};