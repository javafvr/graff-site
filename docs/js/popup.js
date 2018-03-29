
$(document).ready(function() {
	if ( $.cookie("popup") == null ){
		$("#popup__overlay").show();
	}
	else{
		PopUpHide();
	}
});

function PopUpShow() {
	$("#popup__overlay").show();
}

function PopUpHide() {
	$.cookie("popup", "24house", {expires: 10} );
	$("#popup__overlay").hide();
}

function CloseSite() {
	window.top.close();
}
