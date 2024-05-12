const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

function toggleCart() {
    containerCartProducts.classList.toggle('hidden-cart');
}

// Ocultar el carrito de compras al cargar la página
containerCartProducts.classList.add('hidden-cart');

btnCart.addEventListener('click', toggleCart);



/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.closest('.item');
        const title = product.querySelector('h3').textContent;
        const priceText = product.querySelector('p').textContent;
        const price = parseFloat(priceText.replace('$', '').replace(',', ''));

        let existingProduct = allProducts.find(product => product.title === title);

        if (!existingProduct) {
            existingProduct = {
                title: title,
                price: price,
                quantity: 0 // Inicializamos la cantidad en 0 si el producto no está en el carrito
            };
            allProducts.push(existingProduct);
        }

        existingProduct.quantity++; // Aumentamos la cantidad del producto en 1

        showHTML();
    }
});


rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        console.log('Close icon clicked');

        const product = e.target.parentElement;
        console.log('Product:', product);

        const title = product.querySelector('.titulo-producto-carrito').textContent;
        console.log('Title:', title);

        allProducts = allProducts.filter(product => product.title !== title);
        console.log('Updated All Products:', allProducts);

        showHTML();
    }
});


// Funcion para mostrar  HTML
const showHTML = () => {
    if (allProducts.length === 0) { // Verificar si el carrito está vacío
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

	// Actualizamos el selector para incluir todos los botones "Añadir al carro"
const btnsAddToCart = document.querySelectorAll('.btn-add-cart');

// Iteramos sobre cada botón y asignamos el evento de clic
btnsAddToCart.forEach(btn => {
    btn.addEventListener('click', e => {
        const product = e.target.closest('.item');

        // Obtener el precio del producto y convertirlo a un número
        const priceText = product.querySelector('.precio-item').textContent;
        const price = parseFloat(priceText.replace('$', '').replace(',', ''));

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: price
        };

        const existingProductIndex = allProducts.findIndex(product => product.title === infoProduct.title);

        if (existingProductIndex !== -1) {
            allProducts[existingProductIndex].quantity++;
        } else {
            allProducts.push(infoProduct);
        }

        showHTML();
    });
});


    // Limpiar HTML
    rowProduct.innerHTML = '';

    let totalOfProducts = 0;
	let total = 0; // Inicializamos el total fuera del bucle

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        const productPrice = parseFloat(product.price); // Convertir el precio a un número

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">$${productPrice.toLocaleString('en-US', {minimumFractionDigits: 3})}</span> <!-- Formatear el precio con separadores de miles y tres decimales -->
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        `;

        rowProduct.appendChild(containerProduct);

        total += product.quantity * productPrice; // Actualizar el total utilizando el precio convertido
    });

    // Formatear el precio total para que se muestre en miles y con dos decimales
    valorTotal.innerText = `$${total.toLocaleString('en-US', {minimumFractionDigits: 3})}`;

};
