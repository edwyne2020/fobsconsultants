   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutSine');
      });
      var Carousel1Opts =
      {
         delay: 3000,
         duration: 500,
         easing: 'swing',
         mode: 'forward',
         direction: '',
         scalemode: 3,
         pagination: false,
         pause: null,
         start: 0
      };
      $("#Carousel1").carousel(Carousel1Opts);
      $("#Carousel1_back a").click(function()
      {
         $('#Carousel1').carousel('prev');
      });
      $("#Carousel1_next a").click(function()
      {
         $('#Carousel1').carousel('next');
      });
      $("a[data-rel='gallery']").attr('rel', 'gallery');
      $("#gallery").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $('#gallery-filter a').click(function()
      {
         var value = $(this).data('filter-tag');
         if (value == 'all')
         {
            $('#gallery .thumbnail').show();
         }
         else
         {
            var filter = "[data-filter-tag='" + value + "']";
            $('#gallery .thumbnail').not(filter).hide();
            $('#gallery .thumbnail').filter(filter).show();
         }
         $('#gallery-filter a').removeClass('active');
         $(this).addClass('active');
      });
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top-50 }, 600, 'easeInQuad');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCubic');
      });
   });
   
   $(document).ready(function()
   {
      var $countup = $('#count-up h1');
      
      $countup.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', parseInt($obj.html()));
        $obj.data('done', false);
        $obj.html('0');
      });
      $(window).bind('scroll', function() 
      {
         $countup.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.html(val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
