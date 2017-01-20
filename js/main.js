$(function(){
	/*setTimeout(function(){
        $(".calendar-widget").css('right', function(){ return $(this).offset().right; })
                     .animate({"right":"0px"}, "slow");   
    }, 5000);

    $('.close-icon').click(function(){
        $(".calendar-widget").css('right', function(){ return $(this).offset().right; })
                     .animate({"right":"-350px"}, "slow");   
    });*/

     var slideLeftBtn = document.querySelector('#c-button--slide-right');

    slideLeftBtn.addEventListener('click', function(e) {
        var slideLeft = new Menu({
      wrapper: '#o-wrapper',
      type: 'slide-right',
      menuOpenerClass: '.c-button',
      maskId: '#c-mask'
    });
      e.preventDefault;
      slideLeft.open();
    });

    $('.slide-up-menu').click(function(){
        $('.site-switcher-section').slideToggle();
        $('.show-site-switcher').show();
    });

    $('.show-site-switcher').click(function(){
        $('.show-site-switcher').hide();
        $('.site-switcher-section').slideToggle();
    });

    

    $('.watch-preview').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('Preview-Modal');

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    $('.bubble').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('Attraction-Modal');

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    $('.panel-title a').click(function(){
        var hasClass = $( this ).children("span").hasClass( "icon-accordion-right" );
        $(".icon-accordion-down").addClass("icon-accordion-right").removeClass("icon-accordion-down");

        if(hasClass) {
            $( this ).children("span").addClass("icon-accordion-down");
            $( this ).children("span").removeClass("icon-accordion-right");
        } else {
            $( this ).children("span").addClass("icon-accordion-right");
            $( this ).children("span").removeClass("icon-accordion-down");
        }
    });

    $('#homepage-slider').slick({
            dots: true,
            arrows: false
    });




    var $window = $(window);
    var $callout = $('#callout');
  
    $window.on('scroll', function() {
        var startZone = $('header').offset().top + 255;
        var endZone = $('footer').offset().top - $window.height() - 100;
        
        if ($window.scrollTop() > startZone && $window.scrollTop() < endZone) {
            $callout.animate({ 'right': '0px' }, 150);
        } else {
           $callout.stop(true).animate({ 'right': '-450px' }, 150);
        }


    });



});






