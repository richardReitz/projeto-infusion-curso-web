(function(){
    const $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    const menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btn',
        widhtEnabled: 1024
    })

    const carouselImgs = new Carousel({
        container: '.laptop-slide .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})() 