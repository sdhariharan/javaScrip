const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        rating: 4.8,
        stock: 10
    },
    {
        id: 2,
        name: "Phone",
        category: "Electronics",
        price: 30000,
        rating: 4.5,
        stock: 5
    },
    {
        id: 3,
        name: "Shirt",
        category: "Fashion",
        price: 1000,
        rating: 4.2,
        stock: 20
    }
];
function Display(products)
{
    products.forEach(product => {
        console.log(
            `ID: ${product.id}
Name: ${product.name}
Category: ${product.category}
Price: ${product.price}
Rating: ${product.rating}
Stock: ${product.stock}
----------------`
        );
    });
}
function SearchByProductName(products, product_name)
{
    const product = products.find(
        product => product.name === product_name
    );

    if(product)
    {
        Display([product]);
    }
    else
    {
        console.log("Product Not Found");
    }
}
function SearchByCategory(products, category)
{
    const result =
        products.filter(
            product => product.category === category
        );

    Display(result);
}
function SortByPrice(products)
{
    return [...products].sort(
        (a,b) => a.price - b.price
    );
}
function SortByRating(products)
{
    return [...products].sort(
        (a,b) => b.rating - a.rating
    );
}
function AvailableStock(products)
{
    const available =
        products.filter(
            product => product.stock > 0
        );

    Display(available);
}
function CheckProduct(products, name)
{
    const exists =
        products.some(
            product => product.name === name
        );

    if(exists)
    {
        console.log("Product Found");
    }
    else
    {
        console.log("Product Not Found");
    }
}
function TotalInventoryValue(products)
{
    return products.reduce(
        (acc, product) =>
            acc + product.price * product.stock,
        0
    );
}
function CountProductsPerCategory(products)
{
    return products.reduce(
        (acc, product) =>
        {
            if(acc[product.category])
            {
                acc[product.category]++;
            }
            else
            {
                acc[product.category] = 1;
            }

            return acc;
        },
        {}
    );
}
function FilterByPriceRange(
    products,
    minPrice,
    maxPrice
)
{
    return products.filter(
        product =>
            product.price >= minPrice &&
            product.price <= maxPrice
    );
}
function MultiFilter(
    products,
    category,
    maxPrice,
    minRating
)
{
    return products.filter(
        product =>
            product.category === category &&
            product.price <= maxPrice &&
            product.rating >= minRating
    );
}
function OutOfStockAlert(products)
{
    const hasOutOfStock =
        products.some(
            product => product.stock === 0
        );

    if(hasOutOfStock)
    {
        console.log(
            "Some products are out of stock"
        );
    }
    else
    {
        console.log(
            "All products available"
        );
    }
}
function CanCheckout(products)
{
    return products.every(
        product => product.stock > 0
    );
}
function SearchAndSort(
    products,
    category
)
{
    return products
        .filter(
            product =>
                product.category === category
        )
        .sort(
            (a,b) => a.price - b.price
        );
}