var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
if (mac) {
 var duration_enscroll = 700;
}else{
 var duration_enscroll = 100;
}
function set_enscroll_select2 (idname) {
    setTimeout(function() {
        if($('.select2-results div').length > 0){ 
            $('.select2-results div').remove();
        }
    },1);
    setTimeout(function() {
        var length_track = $(document).find('.track3').length;
        if(length_track == 0){
            $('#select2-' + idname + '-results').enscroll({
                showOnHover: false,
                verticalTrackClass: 'track3',
                addPaddingToPane: false,
                verticalHandleClass: 'handle3',
                easingDuration: duration_enscroll,
            });
        }
    },2);
    setTimeout(function() {
        $('.select2-results__option[aria-selected]').css('width','100%');
    },3);
}
$(document).ready(function(){
	if( $(window).width() >= 760){
		$('#sl-nhamang').select2({
  			minimumResultsForSearch: Infinity,
		});
		$('#sl-giaca').select2({
  			minimumResultsForSearch: Infinity,
		});
		if ( $("#sl-nhamang").length > 0) {
	        $("#sl-nhamang").on("select2:open", function (e) {
	            set_enscroll_select2('sl-nhamang');
	        });
	    }
	    if ( $("#sl-giaca").length > 0) {
	        $("#sl-giaca").on("select2:open", function (e) {
	            set_enscroll_select2('sl-giaca');
	        });
	    }
	}
});