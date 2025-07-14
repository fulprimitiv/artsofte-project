window.addEventListener('DOMContentLoaded', () => {
    console.log('App init');
})

document.addEventListener('DOMContentLoaded', function () {
    const productCard = document.querySelector('.product-card');
    const title = document.querySelector('.product-card__title');
    const price = document.querySelector('.product-card__spec--price .product-card__spec-value');
    const modal = document.getElementById('successModal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalCloseButton = document.querySelector('.modal__close');
    const modalButton = document.querySelector('.modal__button');

    function openModal() {
        modal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }

    productCard.addEventListener('click', function (event) {
        openModal();
    });

    title.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    price.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    modalOverlay.addEventListener('click', closeModal);

    modalCloseButton.addEventListener('click', closeModal);

    modalButton.addEventListener('click', closeModal);
});
