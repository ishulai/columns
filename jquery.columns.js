//Copyright(c) 2013 by Thomas Lai

(function ( $ ) {
 
    $.fn.columns = function( options ) {
 
        var settings = $.extend({
            // These are the defaults.
            columns: 1,
            width: null,
            child: null,
            verticalGap: 0,
            horizontalGap: 0
        }, options );
        
        if(settings.child==null) {
        
	        console.log("You need to specify the child element");
	        
        } else {
        
	        var width = settings.width;
	        
	        if(width==null) {
		        var parentWidth = $(this).width();
		        width = parentWidth/settings.columns;
	        }
	 
	        $(settings.child).css({
		        'margin-bottom': settings.verticalGap
	        });
	        
	        for(var i=1;i<=settings.columns;i++) {
	        
	        	$(this).append('<div id="col'+i+'" class="column"></div>');
	        	
	        }
	        	
	        
	        $(".column").css({
	        	'width': width,
	        	'float': 'left',
	        	'marginRight': settings.horizontalGap
	        });
	        
	        $("#col"+settings.columns).css("marginRight","0");
	        
	        var columnsleft = settings.columns;
	        
	        for(var i=1;i<=settings.columns;i++) {
	        
		        $(settings.child+":nth-child("+columnsleft+"n+1)").not(".tempcolumnchildelement").appendTo( "#col"+i );
		        
		        $(".column "+settings.child).addClass("tempcolumnchildelement");
		        
		        columnsleft-=1;
	        	
	        }
	        
	        $(".tempcolumnchildelement").removeClass("tempcolumnchildelement");
	        
	        $(this).append('<div style="clear:both"></div>');
	        
	        
	    }
        
    };
 
}( jQuery ));
