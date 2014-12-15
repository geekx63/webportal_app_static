function tooltip(id){
$("#"+id).hover(function() {
	$(this).tooltip('show');
}, function() {
	$(this).tooltip('hide');
});
}