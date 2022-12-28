// function sizeValue(){
//     var selectedValue = document.getElementById('s1').value;
// localStorage.setItem("size",selectedValue);

// }

let carts = document.querySelectorAll('.cart1');

let products = [
    {
        name: "Altered grey jeans",
        tag: "greyjeans",
        size: "One size", //localStorage.getItem("size"),
        price: 10000,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onloadcartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.csize span').textContent = productNumbers;
        document.querySelector('.cartempty span').style.opacity = '0%';
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.csize span').textContent = productNumbers + 1;
    } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.csize span').textContent = 1;
}
setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `            
            <div class="product">
            <div class="pclose"><img src="images/icons/Close.svg"></div>
            <div class="pimage"><img src="images/${item.tag}.jpg"></div>
        <span>${item.name}</span>
        <div class="pprice">${item.price}р</div>
        </div>
        <div class="pquantity">
        <span>${item.inCart}</span>
        </div>
        <div class="ptotal"> ${item.inCart * item.price}р
        </div>
        `

        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <div class="basketTotalTitle">Итого:</div>
        <div class="basketTotal">
        ${cartCost}р
        </div>
        </div>
        `;
    }
}

onloadcartNumbers();
// sizeValue();
displayCart();