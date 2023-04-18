

let Fname=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let postBtn=document.getElementById('postBtn');

postBtn.addEventListener('click',()=>{
    let obj={
        name:Fname.value,
        email:email.value,
        phone:phone.value
    }
    axios.post("https://crudcrud.com/api/6e8c4d033a564ae0bde31efbb1345436/appointments",obj)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
})