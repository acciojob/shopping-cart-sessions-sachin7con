//ONS This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

const cart = [];
// Render cart list
function renderCart() {
	cartList.innerHTML = "";
	cart.forEach((item) => {
		const cli = document.createElement("li");
		cli.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`; 
		cartList.appendChild(cli);
	})
	
	
}

// Add item to cart
function addToCart(productId) {
	const product = products.find((p) => p.id === productId);
	if(product){
		cart.push(product);
		renderCart();
		sessionStorage.setItem('product', JSON.stringify(product));
	}
}

// Remove item from cart
function removeFromCart(productId) {
	// cart = cart.filter((item) => item.id !== productId);
	// renderCart();
	const indx = cart.findIndex((p) => p.id === productId);
	if(indx != -1){
		cart.splice(indx, 1);
		renderCart();
	}
}

// Clear cart
function clearCart() {
	//cart = [];  // it cant be used with const type of array
	cart.length =0;
	renderCart();
	sessionStorage.removeItem('cart');
}

productList.addEventListener('click', (event) => {
	if(event.target.classList.contains("add-to-cart-btn")){
		const productId = parseInt(event.target.dataset.id);
		addToCart(productId);
	}
})
cartList.addEventListener('click', (event)=> {
	if(event.target.classList.contains("remove-from-cart-btn")){
	const productId = parseInt(event.target.dataset.id);
	removeFromCart(productId);
		}
})

document.getElementById("clear-cart-btn").addEventListener('click', () =>{
	clearCart();
})

// Initial render
renderProducts();
renderCart();


