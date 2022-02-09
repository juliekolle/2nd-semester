//console.log("hey im working")

const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
handleCategoryList(data);
})

function handleCategoryList(data){
console.log(data);
data.forEach(showCategory);
}

function showCategory(category){
    console.log(category);

    //grab the template
    const template = document.querySelector("#smallCategoryTemplate").content;

    //clone it
const copy = template.cloneNode(true);

//change content
//copy.querySelector("h3").textContent = product.productdisplayname;
//copy.querySelector("h3").textContent = brandname;

//grab parent
const parent = document.querySelector("#category_grid");

//append
parent.appendChild(copy);
}