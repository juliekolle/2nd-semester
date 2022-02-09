const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
handleProductList(data);
})

function handleProductList(data){
//console.log(data);
data.forEach(showProduct);
}

/*{
showProduct(item);
});
}*/



/*
<template id="smallProductTemplate">
          <article class="smallProduct">
            <h3>PRODUCTTITLE</h3>
            <p class="subtle"></p>
            <img
              class="productimage"
              src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp"
              alt="productimage"
            />
            <p class="price"><span>Prev.</span> 1000DKK</p>
            <div class="discounted">
              <p>Price: 500DKK</p>
              <p>-34%</p>
            </div>
            <a href="product.html"> View product</a>
          </article>
        </template>
*/

function showProduct(product){
    console.log(product);
//grab the template
const template = document.querySelector("#smallProductTemplate").content;

//clone it
const copy = template.cloneNode(true);

//change content
copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
copy.querySelector("h3").textContent = product.productdisplayname;

copy.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

if(product.soldout){
    copy.querySelector("article").classList.add("soldout_label")
}
if(product.discount){
    copy.querySelector("article").classList.add("onsale_label")
}

copy.querySelector(".discounted p").textContent = product.price/product.discount + "DKK";
copy.querySelector(".price").textContent = "Prev. " + product.price + "DKK";
//copy.querySelector(".discounted p").textContent = product.discount;

//grab parent
const parent = document.querySelector("#productlist_grid");

//append
parent.appendChild(copy)
}