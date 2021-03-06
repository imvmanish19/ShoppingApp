function createProductCard(product) {
    return $(`
        <div class="card">
        <p class="card-title">${product.name}</p>
        <p class="manufacturer">${product.manufacturer}</p>
        <p class="price">Rs. ${product.price}</p>
        <button class="buy-btn" type="button">Buy</button>
        </div>
    `);
}

function getProducts(done) {
    $.get('/api/products',(data) => {
        done(data)
    });
}


function addProduct(name,manufacturer,price,done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manufacturer,
        price: price
    }, (data) => {
        done(data)
    })
}