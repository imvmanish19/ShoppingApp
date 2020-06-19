$(document).ready(() => {
    let container = $('.container');
    getProducts((products) => {
        console.log(products)
        container.empty();
        products.forEach((product) => {
            container.append(createProductCard(product));
            
        });
    })
});