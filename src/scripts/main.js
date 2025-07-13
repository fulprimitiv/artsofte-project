window.addEventListener('DOMContentLoaded', () => {
    console.log('App init');
})

document.addEventListener('DOMContentLoaded', function () {
    const productCard = document.querySelector('.product-card');
    const title = document.querySelector('.product-card__title');
    const price = document.querySelector('.product-card__spec--price .product-card__spec-value');

    productCard.addEventListener('click', function (event) {
        console.log('УРА');
    });

    title.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    price.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
