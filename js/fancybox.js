 // fancybox
$(document).ready(function() {
    $(".product-iamges__link").fancybox({
        buttons : ['close'],
        loop: true,
        btnTpl: {
         arrowLeft:
         '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
         '<img src="/images/arrow-prev.png">' +
         "</button>",
         arrowRight:
         '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
         '<img src="/images/arrow-next.png">' +
         "</button>",
         smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close">close</button>'
         },    
       });
    
       $(".section-lukbook__link").fancybox({
        buttons : ['close'],
        loop: true,
        btnTpl: {
         arrowLeft:
         '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
         '<img src="/images/arrow-prev.png">' +
         "</button>",
         arrowRight:
         '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
         '<img src="/images/arrow-next.png">' +
         "</button>",
         smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close">close</button>'
         },    
       });
})