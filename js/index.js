$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>50)
        $('.navbar').addClass('nav-active')
        else $('.navbar').removeClass('nav-active')
    })
})