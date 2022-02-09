const url ="https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        handleProductList(data); 
    })

function handleProductList (data){
    // console.log(data); <-- Chech that 10 items are there
    data.forEach(showProduct);
}





function showProduct(product){
    console.log(product);
    // Soldout Sale




    // grab the template
    const template = document.querySelector("#ProductTemplate").content;


    // clone it 
    const copy = template.cloneNode(true);

    // change content 
    copy.querySelector(".subtle").textContent = ${product.articletype} | ${product.brandname}; 

    copy.querySelector("h3").textContent = product.productdisplayname;

    if(product.soldout){
        copy.querySelector("article").classList.add("Soldout");
    }

    if(product.discount){
        copy.querySelector("article").classList.add("Sale");
    }



    // <div class="discounted">
    //       <p> Now DKK 1560;-</p>
    //       <p> -34% </p>
    //     </div>


    copy.querySelector(".discounted p").textContent = product.price / product.discount;


    // grab parent 
    const parent = document.querySelector("main");

     // append
     parent.appendChild(copy);
}