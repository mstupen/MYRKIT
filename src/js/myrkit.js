
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

/* copy loaded thumbnails into carousel */
$('.row .thumbnail').on('load', function() {

}).each(function(i) {
  //if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parents('div');
    var title = $(this).parent('a').attr("title");

    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('.carousel-inner');
    if (i==0){ // set first item active
     item.addClass('active');
    }
  //}
});

/* activate the carousel */
$('#photoCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#photoCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.row .thumbnail').click(function(){
    var idx = $(this).parents('div').index();
  	var id = parseInt(idx);
  	$('#myModal').modal('show'); // show the modal
    $('#photoCarousel').carousel(id); // slide carousel to selected

});
