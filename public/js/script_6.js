function sizeValue6(){
    var selectedValue = document.getElementById('s6').value;
localStorage.setItem("size",selectedValue);
}

let carts = document.querySelectorAll('.cart6');

let products = [
    {
        name: "Boot-cut jeans",
        tag: "whitejeans",
        size: "One size", //localStorage.getItem("size"),
        price: 8900,
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

onloadcartNumbers();
sizeValue6()