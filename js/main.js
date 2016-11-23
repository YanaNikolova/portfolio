$(document).ready(function() {
	$("#section-about").click(function() {
		$('html, body').animate({
			scrollTop: parseInt($(".sec.about").offset().top)
    }, 2000);
	});
	$("#section-skills").click(function() {
		$('html, body').animate({
			scrollTop: parseInt($(".sec.skills").offset().top)
    }, 2000);
	});
	$("#section-projects").click(function() {
		$('html, body').animate({
			scrollTop: parseInt($(".sec.projects").offset().top)
    }, 2000);
	});
	$("#section-resume").click(function() {
		$('html, body').animate({
			scrollTop: parseInt($(".sec.resume").offset().top)
    }, 2000);
	});
	$("#section-contacts").click(function() {
		$('html, body').animate({
			scrollTop: parseInt($(".sec.contacts").offset().top)
    }, 2000);
	});
	
});