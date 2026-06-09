// ==========================
// SHOPPING CART PROJECT
// ==========================

// Initial Cart
let cart = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mouse",
        price: 1000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2000
    }
];

// ==========================
// DISPLAY CART
// ==========================

function displayCart(cart) {

    console.log("\n===== CART ITEMS =====");

    for (const { id, name, price } of cart) {

        console.log(
            `ID: ${id} | Product: ${name} | Price: ₹${price}`
        );
    }
}

// ==========================
// ADD PRODUCT
// ==========================

function addProduct(cart, product) {

    return [
        ...cart,
        product
    ];
}

// ==========================
// REMOVE PRODUCT
// ==========================

function removeProduct(cart, productId) {

    return cart.filter(
        product => product.id !== productId
    );
}

// ==========================
// CALCULATE TOTAL
// ==========================

function calculateTotal(cart) {

    return cart.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );
}

// ==========================
// FIND MOST EXPENSIVE PRODUCT
// ==========================

function findMostExpensive(cart) {

    return cart.reduce(
        (maxProduct, currentProduct) =>

            currentProduct.price >
            maxProduct.price

                ? currentProduct
                : maxProduct
    );
}

// ==========================
// REST PARAMETER EXAMPLE
// ==========================

function calculateBill(...prices) {

    const total = prices.reduce(
        (sum, price) =>
            sum + price,
        0
    );

    const average =
        total / prices.length;

    return {
        total,
        average,
        count: prices.length
    };
}

// ==========================
// MAIN PROGRAM
// ==========================

// Display Initial Cart

displayCart(cart);

// Add Product

const monitor = {
    id: 4,
    name: "Monitor",
    price: 12000
};

cart = addProduct(
    cart,
    monitor
);

console.log(
    "\nProduct Added Successfully!"
);

displayCart(cart);

// Remove Mouse

cart = removeProduct(
    cart,
    2
);

console.log(
    "\nMouse Removed Successfully!"
);

displayCart(cart);

// Calculate Total

const total =
    calculateTotal(cart);

console.log(
    `\nTotal Cart Value: ₹${total}`
);

// Find Most Expensive Product

const expensiveProduct =
    findMostExpensive(cart);

console.log(
    "\nMost Expensive Product:"
);

console.log(expensiveProduct);

// ==========================
// ARRAY DESTRUCTURING
// ==========================

const products =
    cart.map(
        product => product.name
    );

const [
    featuredProduct,
    ...otherProducts
] = products;

console.log(
    "\nFeatured Product:"
);

console.log(featuredProduct);

console.log(
    "\nOther Products:"
);

console.log(otherProducts);

// ==========================
// REST PARAMETER DEMO
// ==========================

const bill =
    calculateBill(
        50000,
        12000,
        2000,
        3000
    );

console.log(
    "\nBill Information:"
);

console.log(bill);