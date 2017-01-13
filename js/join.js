$(function() {

	$('#join').click(function() {
		$('#h_login').show();
		$(window).scrollTop(0);
		$('#h_login').click(function() {
			$(this).hide()
		})
		$('#Nav').click(function(){
			$('#h_login').hide();
		})

	})

})