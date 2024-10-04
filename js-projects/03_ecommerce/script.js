document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name:"Product 1", price: 29.99},
        {id: 2, name:"Product 2", price: 99.99},
        {id: 3, name:"Product 3", price: 49.99},
    ];

    

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Remove this line as it's causing issues:
    // cart.forEach(cartItem => renderCart(cartItem))

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv)
    })


    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
           const productId = parseInt(e.target.getAttribute('data-id'))
           const product = products.find(p => p.id === productId)
           addToCart(product)
        }
    });

    function addToCart(product){
        cart.push(product)
        saveCartToLocalStorage()
        renderCart()
    }

    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    function renderCart(){
        cartItems.innerHTML = "";
        let totalPrice = 0
        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden')
            cartTotalMessage.classList.remove("hidden")
            cart.forEach((item, index) => {
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                 <button class="remove-btn" data-index="${index}">Delete</button>`;
                cartItems.appendChild(cartItem);
            })
            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove("hidden");
            cartTotalMessage.classList.add("hidden");
            totalPriceDisplay.textContent = `$0.00`;
        }
    }

    // Add this event listener for removing items from the cart
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            cart.splice(index, 1);
            saveCartToLocalStorage();
            renderCart();
        }
    });

    checkOutBtn.addEventListener('click', () => {
        cart.length = 0
        saveCartToLocalStorage()
        alert("Checkout successful")
        renderCart()
    })

    // Add this line to render the cart on page load
    renderCart();
})