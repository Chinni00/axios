let Fname=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
 let postBtn=document.getElementById('postBtn');
 let postList=document.getElementById('postList');

let getList=document.getElementById('getList');
let getBtn=document.getElementById('getBtn');

postBtn.addEventListener('click',()=>{
    let data;
    let obj={
        name:Fname.value,
        email:email.value,
        phone:phone.value
    }
    let li=document.createElement('li');
    axios.post("https://crudcrud.com/api/6e8c4d033a564ae0bde31efbb1345436/appointments",obj)
    .then(res=>{
        data=res.data;
        console.log(res.data)
    })
    .then(()=>li.innerText=`${data.name}-${data.email}-${data.phone}`)
    .catch(err=>console.log(err))
    
     postList.appendChild(li);
    Fname.value='';
    email.value='';
    phone.value=''
})

window.addEventListener("DOMContentLoaded",()=>{
    let getData;
    axios.get('https://crudcrud.com/api/6e8c4d033a564ae0bde31efbb1345436/appointments')
    .then((res)=>{
        getData=res.data;
        console.log(res.data)
    })
    .then(()=>{
        for(obj of getData){
            let li=document.createElement('li');
            li.textContent=`${obj.name}-${obj.email}-${obj.phone}`
            getList.appendChild(li);
            
        }
    })
    .catch(err=>console.log(err))
})