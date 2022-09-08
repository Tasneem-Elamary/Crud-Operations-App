const baseURL = 'http://localhost:3000'
// start Display data
let products = []
var searchKey = $("#searchKey").val();
console.log(localStorage.getItem("userID"));

// if(!searchKey){
//     getData()}

$("#searchKey").on("input",() => {
    
    searchKey = $("#searchKey").val();
    getData()
})

function getData() {
    console.log(searchKey);
    axios({
        method: 'get',
        url: `${baseURL}/product`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        params: { searchKey:$("#searchKey").val() }
    }).then(function (response) {
        console.log(response);
        const { message, result } = response.data
        products = result
        
        showData()
    }).catch(function (error) {
        console.log(error);
    });
}
getData()
function showData() {
    let cartonna = ``
    
    for (let index = 0; index < products.length; index++) {
        cartonna += `  <tr>
           <td>${products[index].productName}</td>
           
           <td>${products[index].productDesc}</td>
           <td>
           <button onclick='deleteItem(${products[index].id})' class="btn btn-danger">Delete</button>
           <button onclick='updateItem(${products[index].id})' class="btn btn-success">Update</button>
    
           </td>
       </tr>`

    }
    document.getElementById('tbody').innerHTML = cartonna
}
// End Display data

//create product with 
$("#addProduct").click(() => {
    const data = {
        name: $("#name").val(),
       
        description: $("#description").val(),
        userID: localStorage.getItem("userID")
    }
    console.log(data);

    axios({
        method: 'post',
        url: `${baseURL}/product`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("added success")
            getData()
        } else {
            alert("Fail to add your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
})


//delete product with id
function deleteItem(id){

    axios({
        method: 'delete',
        url: `${baseURL}/product/${id}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            getData()
        } else {
            alert("Fail to Delete your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// redirect to update product page
function updateItem(id){
    localStorage.setItem("productID" ,id)  
    window.location.replace("file:///F:/Route_%20Backend/4/ass4Front/update.html");   
}