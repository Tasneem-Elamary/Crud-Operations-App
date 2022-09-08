const baseURL = 'http://localhost:3000'

$("#signin").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email, password
    }
console.log(data);
    axios({
        method: 'post',
        url:`${baseURL}/signIn`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, result } = response.data
        
        if (message == "Done") {
            localStorage.setItem('userID', result[0].id);
            window.location.replace("file:///F:/Route_%20Backend/4/ass4Front/index.html");
            
        } else {
            alert("In-valid email or password")
        }
    }).catch(function (error) {
        console.log(error);
    });

})
