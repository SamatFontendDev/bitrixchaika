$(document).ready(function() {
    // animate preview
    $('.product-btn--add-to-cart').click(function() {
      // превью вылезает справа
      $('.cart-preview').animate({
        right: '0'
      }, 300)
    })

    $('.cart-preview-close').click(function () {
      // превью прячется
      $('.cart-preview').animate({
        right: '-490px'
      }, 300)
    })
    // убрать товар из превью корзины
    $('.remove-btn').click(function() {
        $(this).parent().parent().parent().parent().fadeOut()
    })

    $('.filter__btn').click(function() {
      $(this).siblings().removeClass('filter__btn--active')
      $(this).addClass('filter__btn--active')
    })
    // мобильное меню
    $('.hamburger').click(function() {
      console.log(1);
      if($('.nav--mobile').hasClass('active')) {

        $('.nav--mobile').animate({
          left: '-300px'
        }, 300)

        $('body').css('overflow', 'visible')

        $('.nav--mobile').removeClass('active')

        return
      }

      $('.nav--mobile').addClass('active')

      $('.nav--mobile').animate({
        left: '0'
      }, 300)

      $('body').css('overflow', 'hidden')
    })
    
    $('.size').click(function() {
      $(this).siblings().removeClass('size--active')
      $(this).addClass('size--active')
    })

    // search
    $('.icons__link--search').click(function(e) {
      e.preventDefault()
      $(this).toggleClass('icons__link--active')
      $('.search').slideToggle()
    })

    $('#filter-btn').click(function() {
      $('.filter__row').css('display', 'none')
      $('.filter-form').css('display', 'block')
    })
    $('#filter-btn-2').click(function() {
      $('.filter__row').css('display', 'flex')
      $('.filter-form').css('display', 'none')
    })
})