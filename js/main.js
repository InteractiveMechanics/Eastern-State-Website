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


    $('.temporary-marker').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('tour-modal');

        
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
        // get the height from the top of the header and add a further 255px for the area where the box will come into view, so that the callout will show if the user scrolls down 255px past the header 
        var startZone = $('header').offset().top + 255;
        // get the height from the top of the footer, subtract the height of the viewport and subtract a further 100 pixels, so that the callout will show if the user scrolls within 100 pixels of the footer 
        var endZone = $('footer').offset().top - $window.height() - 100;
        
        // checks if the user's position is past the startZone and further from the top than the endZone
        if ($window.scrollTop() > startZone && $window.scrollTop() < endZone) {
            // if the condition is true, the box slides from the right to the edge of the page and this takes 150 milliseconds
            //$callout.animate({ 'right': '0px' }, 150);
            $callout.animate({'opacity': '1.0'}, 175);

        } else {
            // if the condition is false or the box is in the middle of animating, it is stopped and the callout then slides off the right hand side of the page, takeing 150 milliseconds
           //$callout.stop(true).animate({ 'right': '-450px' }, 150);
           $callout.stop(true).animate({'opacity': '0'}, 175);
        }


    });


      $('.temporary-marker').click(function () {
        $('#tour-modal').modal();
      
      //appending modal background inside the bigform-content
        $('.modal-backdrop').appendTo('.tour-page');
      //removing body classes to able click events
        $('body').removeClass();
    });



});






