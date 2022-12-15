// Add your code here
let body = document.querySelector('body')
const submitData = (userName, userEmail)=>{
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'accept':'application/json'
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(res=> {
        return res.json()
    })
    .then(data => {
        body.innerHTML =` <p>${data.id}</p>`
    })
    .catch(err => {
        body.innerHTML = `${err.message}`
    });
}
