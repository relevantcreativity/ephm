// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$('#search-term').example('Search');
		
		$("a.iframe").fancybox({
            padding: 0,
            width: 644,
            height: 570
   		});
		
		$('#drop-nav:first').children().hover(
    		function(){
				$(this).addClass('hover');
        		$('ul', this).css('top', '25px');
    		},
    		function(){
        		$('ul', this).css('top', '-200em');
				$(this).removeClass('hover');
    		}
    	);
    });
})(jQuery);