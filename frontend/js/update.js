const baseURL = 'http://localhost:3000'
const productID = localStorage.getItem('productID')
function getProduct() {
    axios({
        method: 'get',
        url: `${baseURL}/product/${localStorage.getItem('productID')}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, result } = response.data
        console.log(result);
        $('#name').val(result[0].productName);
       
        $('#description').val(result[0].productDesc);
    }).catch(function (error) {
        console.log(error);
    });
}
getProduct()

$("#updateProduct").click(() => {
    const data = {
        name: $('#name').val(),
       
        description: $('#description').val(),
        //userID: localStorage.getItem('userID')
    }
    axios({
        method: "put",
        url: `${baseURL}/product/${productID}`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }

    }).then((response) => {
        const { message } = response.data;
        console.log(response);
        if (message == 'Done') {
            window.location.replace("file:///F:/Route_%20Backend/4/ass4Front/index.html");
        } else {
            alert("In-valid data")
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})