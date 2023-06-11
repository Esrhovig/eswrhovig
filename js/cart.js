let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Ash Fitted Jeans',
        image: '1.JPG',
        price: 9000
    },
    {
        id: 2,
        name: 'Black Fitted Jeans',
        image: '2.JPG',
        price: 10000
    },
    {
        id: 3,
        name: 'Baggy short jeans',
        image: '3.JPG',
        price: 9000
    },
    {
        id: 4,
        name: 'Jean Shorts (Blue)',
        image: '4.JPG',
        price: 8000
    },
    {
        id: 5,
        name: 'Jean Shorts (ash)',
        image: '5.JPG',
        price: 8000
    },
    {
        id: 6,
        name: 'Jean Shorts (ash)',
        image: '6.JPG',
        price: 8000
    },
    {
        id: 7,
        name: 'Black Fitted Jeans',
        image: '7.JPG' ,
        price: 10000
    },
    {
        id: 8,
        name: 'Fitted Jeans (Ash)',
        image: '8.JPG' ,
        price: 9000
    },
    {
        id: 9,
        name: 'Fitted Jeans (Light Blue)',
        image: '9.JPG' ,
        price: 9000
    },
    {
        id: 10,
        name: 'Ash Fitted Jeans',
        image: '10.JPG' ,
        price: 9000
    },
    {
        id: 11,
        name: 'Baggy Trousers',
        image: '11.JPG' ,
        price: 12000
    },
    {
        id: 12,
        name: 'Joggers (Red)',
        image: '12.JPG' ,
        price: 13000
    },
    {
        id: 13,
        name: 'Baggy Short Jean',
        image: '13.JPG' ,
        price: 12000
    },
    {
        id: 14,
        name: 'Baggy Jeans ',
        image: '14.JPG' ,
        price: 14000
    },
    {
        id: 15,
        name: 'Baggy black Jeans',
        image: '15.JPG' ,
        price: 14000
    },
    {
        id: 16,
        name: 'Stitches Baggy Jeans',
        image: '16.JPG' ,
        price: 14000
    },
    {
        id: 17,
        name: 'Dior Joggers',
        image: '17.JPG' ,
        price: 14000
    },
    {
        id: 18,
        name: 'Dior Joggers',
        image: '18.JPG' ,
        price: 14000
    },
    {
        id: 19,
        name: 'Dior Joggers (green)',
        image: '19.JPG' ,
        price: 14000
    },
    {
        id: 20,
        name: 'Short knicker Joggers',
        image: '20.JPG' ,
        price: 9000
    },
    {
        id: 21,
        name: 'Short knicker Joggers (Blue)',
        image: '21.JPG' ,
        price: 9000
    },
    {
        id: 22,
        name: 'Short knicker Joggers (green)',
        image: '22.JPG' ,
        price: 9000
    },
    {
        id: 23,
        name: 'Short knicker Joggers (Blue)',
        image: '23.JPG' ,
        price: 9000
    },
    {
        id: 24,
        name: 'Short knicker Joggers (ash)',
        image: '24.JPG' ,
        price: 9000
    },
    {
        id: 25,
        name: 'Joggers (Blue)',
        image: '25.JPG' ,
        price: 13000
    },
    {
        id: 26,
        name: 'Joggers (Green)',
        image: '26.JPG' ,
        price: 13000
    },
    {
        id: 27,
        name: 'Joggers (Light Blue)',
        image: '27.JPG' ,
        price: 13000
    },
    {
        id: 28,
        name: 'Blue Baggy Jeans (Stiched)',
        image: '28.JPG' ,
        price: 15000
    },
    {
        id: 29,
        name: 'Ash Baggy Jeans',
        image: '29.JPG' ,
        price: 15000
    },
    {
        id: 30,
        name: 'Straightend Jeans (Ash)',
        image: '30.JPG' ,
        price: 15000
    },
    {
        id: 31,
        name: 'Baggy Straightend Jeans',
        image: '31.JPG' ,
        price: 15000
    },
    {
        id: 32,
        name: 'Slim Fit Jeans (Stiched)',
        image: '32.JPG' ,
        price: 15000
    },
    {
        id: 33,
        name: 'Baggy Jeans (deep Blue)',
        image: '33.JPG' ,
        price: 15000
    },
    {
        id: 34,
        name: 'Baggy Jeans (deep Blue)',
        image: '34.JPG' ,
        price: 15000
    },
    {
        id: 35,
        name: 'Black Slim Fit Jeans',
        image: '35.JPG' ,
        price: 15000
    },
    {
        id: 36,
        name: 'Baggy Jeans Stiched (Light Blue)',
        image: '36.JPG' ,
        price: 15000
    },
    {
        id: 37,
        name: 'Dark Jeans',
        image: '38.JPG' ,
        price: 15000
    },
    {
        id: 38,
        name: 'Baggy Elastic Jeans',
        image: '39.JPG' ,
        price: 15000
    },
    {
        id: 40,
        name: 'Dark Slim Fit Jean',
        image: '40.JPG' ,
        price: 15000
    },
    {
        id: 41,
        name: 'Dark Slim Fit Jean',
        image: '41.JPG' ,
        price: 15000
    },
    {
        id: 42,
        name: 'Dark Baggy Jean',
        image: '42.JPG' ,
        price: 15000
    },
    {
        id: 43,
        name: 'Slim Fit Ash Jean',
        image: '43.JPG' ,
        price: 15000
    },
    {
        id: 44,
        name: 'Baggy Jean Ash',
        image: '44.JPG' ,
        price: 15000
    },
    {
        id: 45,
        name: 'Baggy Ash Jeans',
        image: '45.JPG' ,
        price: 15000
    },
    {
        id: 46,
        name: 'Baggy Ash Joggers',
        image: '46.JPG' ,
        price: 15000
    },
    {
        id: 47,
        name: 'Baggy Jeans (Ash)',
        image: '47.JPG' ,
        price: 15000
    },
    {
        id: 48,
        name: 'Dark Elastic Jeans',
        image: '48.JPG' ,
        price: 15000
    },
    {
        id: 49,
        name: 'Baggy Jeans (Light Blue)',
        image: '49.JPG' ,
        price: 15000
    },
    {
        id: 50,
        name: 'ELastic Jean',
        image: '50.JPG' ,
        price: 15000
    },
    {
        id: 51,
        name: 'Brown Chinos',
        image: '51.JPG' ,
        price: 15000
    },
    {
        id: 52,
        name: 'Shorts Collection',
        image: '52.JPG' ,
        price: 8000
    },
    {
        id: 53,
        name: 'Elastic Shorts (Ash)',
        image: '53.JPG' ,
        price: 8000
    },
    {
        id: 54,
        name: 'Elastic Shorts (Black)',
        image: '54.JPG' ,
        price: 8000
    },
    {
        id: 55,
        name: 'Elastic Shorts (Black)',
        image: '55.JPG' ,
        price: 8000
    },
    {
        id: 56,
        name: 'Elastic Shorts (Light Blue)',
        image: '56.JPG' ,
        price: 8000
    },
    {
        id: 57,
        name: 'Elastic Shorts (Light Blue)',
        image: '57.JPG' ,
        price: 8000
    },
    {
        id: 58,
        name: 'Elastic Jean Shorts (Black)',
        image: '58.JPG' ,
        price: 8000
    },
    {
        id: 59,
        name: 'Jean Shorts (Stitched)',
        image: '59.JPG' ,
        price: 8000
    },
    {
        id: 60,
        name: 'Black Elastic Shorts',
        image: '60.JPG' ,
        price: 8000
    },
    {
        id: 61,
        name: 'Elastic Jean Shorts (Light Blue)',
        image: '61.JPG' ,
        price: 8000
    },
    {
        id: 62,
        name: 'Elastic Jean Shorts (Light Blue)',
        image: '62.JPG' ,
        price: 8000
    },
    {
        id: 63,
        name: 'Jean Shorts (Dark Blue)',
        image: '63.JPG' ,
        price: 10000
    },
    {
        id: 64,
        name: 'Jean Shorts (Light Blue)',
        image: '64.JPG' ,
        price: 10000
    },
    {
        id: 65,
        name: 'Jean Shorts (Dark Blue)',
        image: '65.JPG' ,
        price: 10000
    },
    {
        id: 66,
        name: 'Elastic Jean Shorts (Dark Blue)',
        image: '66.JPG' ,
        price: 10000
    },
    
    
    
    
    
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    listCart.scrollTop = 0; // Set the scroll position to the top
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}

//  function reloadCard(){ //
    // ...existing code...
    //whatsapp, email checkout//


    function checkout() {
        const name = prompt('Please send a screenshot of your goods along with your name to the whatsapp number +2348028180255:');
        
      }
      
          
        
        // Add event listener to "Checkout" button
const checkoutButton = document.querySelector('.checkOut button');
checkoutButton.addEventListener('click', checkout);


