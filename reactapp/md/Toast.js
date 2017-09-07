export default {
	makeText(str,time){
		$('.tip').show();
		$('.tip').html(str);
		setTimeout(function(){
			$('.tip').hide()
		},time)
	}
}
