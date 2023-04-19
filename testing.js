const apiUrl='https://crudcrud.com/api/aef3a8e77d07440eb455714109053939/appointments'
let inputName=document.getElementById('name');
let inputEmail=document.getElementById('email');
let inputPhone =document.getElementById('phone');
let appointmentsList=document.getElementById('appointments-list');
let postBtn=document.getElementById('post-btn');

function displayOnUi(appointments){
    appointmentsList.innerHTML='';
    
    appointments.forEach(ele => {
        let li=document.createElement('li');
        li.innerHTML=`<span>Name:${ele.name}</span>
        <span>Email:${ele.email}</span>
        <span>Phone:${ele.phone}</span>
        <button class='delete-btn' data-id=${ele._id} >delete</button>
        <button class='update-btn' data-id=${ele._id} >Update</button>
        `
        appointmentsList.appendChild(li);
    });
    const updateBtns=document.querySelectorAll('.update-btn');
    const deleteBtns=document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        const appointmentId=btn.getAttribute('data-id');
        deleteAppointment(appointmentId);
    })
});
    updateBtns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const appointmentId=btn.getAttribute('data-id');
            updateAppointment(appointmentId);
        })
    })
}

function createAppointment(appointment){
    axios.post(apiUrl,appointment)
    .then(res=>{
        console.log(res.data);
        getAppointments();
    })
    .catch(err=>console.log(err))
}

function deleteAppointment(appointmentId){
    axios.delete(`${apiUrl}/${appointmentId}`)
    .then(res=>{
        console.log(res);
        getAppointments();
    })
    .catch(err=>console.log(err))
}

function updateAppointment(appointmentId){
    let obj={
        name:inputName.value,
        email:inputEmail.value,
        phone:inputPhone.value
    }
    axios.put(`${apiUrl}/${appointmentId}`,obj)
    .then(res=>{
        console.log(res);
        getAppointments();
    })
    .catch(err=>console.log(err))
}

function getAppointments(){
    axios.get(apiUrl)
    .then(res=>{
        const appointments=res.data;
        console.log(res.data)
        displayOnUi(appointments);
    })
    .catch(err=>console.log(err))
}

postBtn.addEventListener('click',()=>{
    const appointment={
        name:inputName.value,
        email:inputEmail.value,
        phone:inputPhone.value
    }
    createAppointment(appointment);
});
getAppointments();