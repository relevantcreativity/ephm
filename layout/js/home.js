// JavaScript Document

(function($){
	
    $(document).ready(function() {		
		$('#slides').cycle({ 
    		fx:     'fade', 
    		speed:  'slow', 
    		timeout: 10000, 
    		pager:  '#carousel ul',
    		containerResize: 0,
    		cleartype: true, 
    		pagerAnchorBuilder: function(idx, slide) { 
        		return '#carousel ul li:eq(' + idx + ') a'; 
    		} 
		});
    });
})(jQuery);