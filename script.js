
// const Clos = document.querySelectorAll('#Clos');
// const selectedProducts = document.getElementById('selected-products');
// const sidePanel = document.getElementById('side-panel');
// const AddToCard = document.querySelectorAll('.add-to-cart');

// let totalPrice = 0;

// function updateTotalPrice() {
//   document.getElementById('total-price').innerText = 'Total: $' + totalPrice.toFixed(0);
// }

// AddToCard.forEach(function(button) {
//   button.addEventListener('click', function() {
//     const price = parseFloat(button.parentElement.querySelector('.card-price').textContent.slice(1));
//     totalPrice += price;
//     updateTotalPrice();
//     const productName = button.parentElement.querySelector('.card-title').textContent;
//     const productPrice = button.parentElement.querySelector('.card-price').textContent;
//     const li = document.createElement('li');
//     li.textContent = productName +" " + "-" +" " + productPrice;
//     selectedProducts.appendChild(li);
//     sidePanel.style.right = '0';
//   });
// });

// Clos.forEach(function(Clos){
//   Clos.addEventListener('click', function() {
//     sidePanel.style.right = '-300px';
//     sidePanel.style.opacity = '0';
//   })
// })

// AddToCard.forEach(function(AddToCard) {
//   AddToCard.addEventListener('click', function(event) {
//     if (!sidePanel.contains(event.target) && event.target !== selectedProducts) {
//       sidePanel.style.right = '0px';
//       sidePanel.style.opacity = '1';
//     }
//   });
// }) 




const ClosButtons = document.querySelectorAll('#Clos');
const selectedProducts = document.getElementById('selected-products');
const sidePanel = document.getElementById('side-panel');
const AddToCartButtons = document.querySelectorAll('.add-to-cart');

let totalPrice = 0;

// কার্টে পণ্য যোগ করা
function addToCart(productName, productPrice) {
    const li = document.createElement('li');
    li.textContent = `${productName} - ${productPrice}`;
    selectedProducts.appendChild(li);
}


// সর্বমোট মূল্য আপডেট
function updateTotalPrice() {
    document.getElementById('total-price').innerText = 'Total: $' + totalPrice.toFixed(0);
}

// "যোগ করুন" বাটনগুলি ত্রুটি সহ যোগ করা
AddToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const price = parseFloat(button.parentElement.querySelector('.card-price').textContent.slice(1));
        totalPrice += price;
        updateTotalPrice();
        const productName = button.parentElement.querySelector('.card-title').textContent;
        const productPrice = button.parentElement.querySelector('.card-price').textContent;
        addToCart(productName, productPrice);
        sidePanel.style.right = '0';
    });
});

// "বন্ধ করুন" বাটনগুলি ত্রুটি সহ যোগ করা
ClosButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        sidePanel.style.right = '-300px';
        sidePanel.style.opacity = '0';
    });
});

// সাইড প্যানেলে ক্লিক করে ছাড়ার জন্য নিরাপদতা যোগ
document.addEventListener('click', function(event) {
    if (!sidePanel.contains(event.target) && event.target !== selectedProducts) {
        sidePanel.style.right = '0px';
        sidePanel.style.opacity = '1';
    }
});
