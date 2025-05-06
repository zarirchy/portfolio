$(document).ready(function() {
    // Initialize Typed.js
    new Typed('.typed-text', {
        strings: [
            'Passionate about Web Development',
            'Exploring Artificial Intelligence',
            'Building Real-World Applications'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Highlight active nav link
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('section').each(function() {
            var currLink = $('a.nav-link[href="#' + $(this).attr('id') + '"]');
            var refElement = $(this);
            if (refElement.position().top - 80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // Scroll to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Parallax effect
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        $('.parallax').css('background-position-y', -(scroll * 0.2) + 'px');
    });
});