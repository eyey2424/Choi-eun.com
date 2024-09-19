$('nav > ul ').hover(function(){
    // 올렸을 때
    $('nav ul ul').stop().slideDown()
}, function(){
    // 내렸을 때
    $('nav ul ul').stop().slideUp()
})


