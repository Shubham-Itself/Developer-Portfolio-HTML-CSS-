const login = document.querySelector('.login')
const registraction = document.querySelector('.register')
const x = document.querySelector('.input-fields-registration')
const y  = document.querySelector('.input-fields')


registraction.addEventListener('click' , function(){
    x.style.left = "50px"
    y.style.left = "-600px"
    login.style.backgroundColor = '#fff'

})

login.addEventListener('click' , function(){
    y.style.left = "0px"
    x.style.left = "600px"

})
