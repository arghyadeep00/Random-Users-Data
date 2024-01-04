const api = 'https://randomuser.me/api/';
const img = document.getElementById('icon');
const info = document.getElementById('info');
const title = document.getElementById('title');

const person = document.getElementById('person');
const mail = document.getElementById('mail');
const age = document.getElementById('age');
const address = document.getElementById('address');
const call = document.getElementById('call');
const password = document.getElementById('password');
const btn=document.getElementById('btn')


async function userData() {
    const response = await fetch(api);
    const data = await response.json();
    //default information
    title.innerHTML = 'My name is'
    info.innerHTML = innerHTML = data.results[0].name.first
    img.src = data.results[0].picture.large
    //event listner information
    person.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My name is'
        info.innerHTML = innerHTML = data.results[0].name.first
    })
    mail.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My Email address is'
        info.innerHTML = innerHTML = data.results[0].email
    })
    age.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My Birthday is'
        const fullDate = data.results[0].dob.date;
        const date = new Date(fullDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const datee = date.getDate();
        console.log(year)
        console.log(month)
        console.log(datee)
        info.innerHTML = innerHTML = `${datee}/${month}/${year}`
    })
    address.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My Address is'
        info.innerHTML = innerHTML = `${data.results[0].location.street.number} ${data.results[0].location.street.name}`
    })
    call.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My Phone number is'
        info.innerHTML = innerHTML = `${data.results[0].phone}`
    })
    password.addEventListener('mouseover', () => {
        img.src = data.results[0].picture.large
        title.innerHTML = 'My Password is'
        info.innerHTML = innerHTML = `${data.results[0].login.password}`
    })

}
btn.addEventListener('click',()=>{
    console.log("HEllo")
    userData()
})

userData()


