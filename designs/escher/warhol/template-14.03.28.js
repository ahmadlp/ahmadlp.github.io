/** 
 * Warhol
 */

var Design = Design || { };

Design = {

	Init : function() {

		// Resize
		Design.Resize();

		// Temp hack
		$(".project_thumb").each(function() {
			$(".excerpt", this).appendTo($(this));
		});

	},

	Resize : function() {
		
		// Resize all the images
		$(".entry img, .entry iframe, .entry video, .entry object").each(function() {
			// If we're not in a no-resize element or slideshow, resize
			if( $(this).parents(".no_resize").length != 1  ) {
					
				Design.Media($(this));

			}
		});

		Design.ResizeSlideshows();

	},

	Index : function() {
		// Hide the pagination
		$("#pagination").show();
	},

	Entry : function() {

		// Hide the pagination
		$("#pagination").hide();

		$("iframe, video, object, img").each(function() {
	        $(this).data("height_o", $(this).attr("height"));
	        $(this).data("width_o", $(this).attr("width"));
	    });

		$("iframe, video, object").each(function() {
	    	$(this).attr("height_o", $(this).attr("height"));
	        $(this).attr("width_o", $(this).attr("width"));
	    });

		// Fix slideshows on slideshow img load
		$(".slideshow_component img:first").imagesLoaded(function() {
			Design.Media($(this), 0);
			Design.FixSlideshows($(this), 0);
		});

	},

	/**
	 * Media size
	 *	Scales images and videos
	 *  Centers them within the window
	 */

	Media : function(element) {
		// Setup the variables
		var element_type   = element.get(0).tagName.toLowerCase();
			
		var	entry          = element.closest(".entry"),
			entry_width    = entry.width(),
			content        = element.closest(".project_content"),
			content_width  = content.width(),
			entry_pad      = entry.outerWidth() - entry_width,
			
			element_height = parseInt(element.get(0).getAttribute("height")),
			element_width  = parseInt(element.get(0).getAttribute("width")),
			
			width_ratio    = entry_width / element_width,
			height_diff    = width_ratio * element_height;

		// If we're dealing with an iframe
		if( null ) {
			element_height	= height_diff;
			element_width	= entry_width;

		// if not
		} else {
			// check to see the max width is wider than the window
			if( element_width > entry_width ) {
				element_height	= height_diff;
				element_width	= entry_width;
			}
		}

		var margin_left = Math.floor((content_width - element_width) / 2);
		
		// IE does not like "objects", so don't render them
		if(  $.browser.msie && parseInt($.browser.version, 10) >= 8 && element.is("object") ) {
		
		// Fail
		} else {

			// If the width is defined
			if( element_width > 0 && element_height > 0 ) {
			
				element.css({
					"height"	: element_height + "px",
					"width"		: element_width + "px"
				});

				element.attr("data-new-height", element_height);
				element.attr("data-new-width", element_width);

				// If we're not in a slideshow, add the margin, too
				if( !  element.parents(".slideshow_wrapper").length ) {
					element.css("marginLeft", margin_left);
				} else {
					element.attr("data-margin", margin_left);
				}
			}
		}
		
	}, // end media

	/**
	 * Fixes the dimensions of the slideshows to match the image visible
	 */
	FixSlideshows : function(img, transition) {

		var id = "#" + $(img).parents(".slideshow_component").attr("id");

		// If this has an ID
		if( id != "#" && $(img).attr("data-margin") !== undefined ) {

			var height = $(img).attr("data-new-height"),
				width  = $(img).attr("data-new-width"),
				margin = $(img).attr("data-margin");

			// If the element has a width
			if( width > 0 && height > 0) {

				$(id).animate({
				 	"width"	: width,
				 	"marginLeft" : margin
				}, transition);

				$(id + " .slideshow_container").animate({
					"height" : height + "px",
					"width"  : width + "px"
				}, transition);

				$(id + " .slideshow_nav, " + id + " .slideshow_thumbs, " + id + " .slideshow_caption").animate({
					"width" : width
				}, transition);

			} // width check

		} //end if

	},

	ResizeSlideshows : function() {

		$(".slideshow_component").each(function() {

			var img    = $("img:visible", this),
				height = $(img).attr("data-new-height"),
				width  = $(img).attr("data-new-width"),
				margin = $("img:visible", this).attr("data-margin");

			$(this).css({
				"width"	: width + "px",
				"marginLeft" : margin + "px"
			});

			$(".slideshow_container", this).css({
				"height" : height + "px",
				"width"  : width + "px"
			});

			$(".slideshow_wrapper, .slideshow_nav, .slideshow_thumbs", this).css({
				"width" : width + "px"
			});

		});

	}

}

$(window).resize(function() {
	Design.Resize();
});

$(document).ready(function() {

	$(document).trigger("pageReady");
	changeHorizNav(1);
	$(document).trigger("initNextProject");

	if($("#current_page").val() > 1) {
		changeHorizNav($("#current_page").val());
		setTimeout("changePaginationToCF()",100);
	}

	Design.Init();

});

/**
 * Project
 */
$(document).bind("projectLoadComplete", function(e, pid) {
	Design.Entry();
	Design.Resize();
});

$(document).bind("startProjectLoaded", function(e) {
	Design.Entry();
	Design.Resize();
});

/**
 * Index
 */

$(document).bind("projectIndex", function(e, pid) {
	Design.Index();
});

/**
 * Slideshow dimension fix
 */
$(document).bind("slideshowTransitionStart", function(e, nextSlide) { 
	if ( $("slideconfig").attr("transition") !== "none" ) {
		Design.FixSlideshows(nextSlide, 300);
	}
});

$(document).bind("slideshowTransitionFinish", function(e, nextSlide) { 
	if ( $("slideconfig").attr("transition") == "none" ) {
		Design.FixSlideshows(nextSlide, 0);
	}
});

/**
 * Old
 */

/////////////////////////////////////////////////////////////////////////////////////////////////
function changePaginationToCF() {
	var prev_page = parseInt($("#current_page").val()) - 1;
	var next_page = parseInt($("#current_page").val()) + 1;
	
	$(".prev_page").removeAttr("onclick").click(function() {
		changePageCF(prev_page);
		return false;
	});
	$(".next_page").removeAttr("onclick").click(function() {
		changePageCF(next_page);
		return false;
	});
	
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function changePageCF(newpage) {
	$(document).trigger("pageChange", [newpage]);
	var limit = $("#limit").val();
	var cur = document.getElementById('current_page').value;
	var total_pages = document.getElementById('total_pages').value;
	var current_page = document.getElementById('page_'+cur);
	var current_nav = document.getElementById('nav_page_'+cur);
	var new_page = document.getElementById('page_'+newpage);
	var new_nav = document.getElementById('nav_page_'+newpage);
	var pagination = document.getElementById('pagination');
	
	// Remove the thumb highlight
	Projects.Helper.RemoveThumbHighlight();
	
	// dump the old nav
	if(current_nav) current_nav.style.display = "none";
	
	// show the new nav
	if(new_nav) new_nav.style.display = "block";
	
	// dump prev page thumbs
	if(current_page) current_page.style.display = "none";
	
	// change pagination
	var pagout = "";
	if(newpage > 1) pagout += "<a href=\"javascript:void(0)\" onclick=\"changePageCF("+(parseInt(newpage)-1)+","+limit+")\" class=\"prev_page\">Prev page</a>";
	if(newpage > 1 && newpage < total_pages) pagout += "<span>&nbsp;/&nbsp;</span>";
	if(newpage < total_pages) pagout += "<a href=\"javascript:void(0)\" onclick=\"changePageCF("+(parseInt(newpage)+1)+","+limit+")\" class=\"next_page\">Next page</a>";
	pagout += "&nbsp;<span>("+newpage+" of "+total_pages+")</span>";
	
	if($(".pagination").length > 0) $(".pagination").each(function() { $(this).html(pagout); });
	
	
	// show next page thumbs
	if(new_page) {
		showNextPageThumbs( newpage );
	}
	
	// set new page values
	document.getElementById('current_page').value = newpage;
	curspot = cur < newpage ? (cur*limit)-1 : ((newpage-1)*limit)-1;
	document.getElementById('this_spot').value = curspot;
		
	window.scrollTo(0,0);
	
	changeHorizNav(newpage);
	$(document).trigger("pageChangeComplete", [newpage]);

}

/**
 * For slideshow images to fire the format function
 */
$.fn.imagesLoaded = function(callback, fireOne) {
  var
    args = arguments,
    elems = this.filter('img'),
    elemsLen = elems.length - 1;

  elems
    .bind('load', function(e) {
        if (fireOne) {
            !elemsLen-- && callback.call(elems, e);
        } else {
            callback.call(this, e);
        }
    }).each(function() {
        // cached images don't fire load sometimes, so we reset src.
        if (this.complete || this.complete === undefined){
            this.src = this.src;
        }
    });
}

/**
 * jQuery Cycle
 */

