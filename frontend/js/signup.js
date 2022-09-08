const baseURL = 'http://localhost:3000'

$("#signup").click(() => {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();

    const data = {
        name, email, password
    }
   console.log(data);
    axios({
        method: 'post',
        url:`${baseURL}/signUp`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        
        const { message } = response.data
        if (message == "Done") {
            window.location.replace("file:///F:/Route_%20Backend/4/ass4Front/signin.html");
        } else  {
            alert("Already Exist")
        }
    }).catch(function (error) {
        console.log(error);
    });

})