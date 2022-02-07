const url = "https://kea-alt-del.dk/t7/api/products/2100";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
handleProductList(data);
})

function handleProductList(data){
console.log(data);
}