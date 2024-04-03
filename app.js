const email = document.querySelector("#email")
const form = document.querySelector('form'); 

email.addEventListener('input', (e)=>{
  if(email.validity.typeMismatch){
    
    email.setCustomValidity('Please enter a valid email address!')
    preventDefault(e); 
  } else {
    email.setCustomValidity(''); 
  }
})
