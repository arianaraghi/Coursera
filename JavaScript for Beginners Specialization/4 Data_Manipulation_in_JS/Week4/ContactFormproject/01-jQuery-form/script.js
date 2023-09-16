// add script here
var formDataURL = "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php";
$('#formdata').load(formDataURL);

$('#myForm').validate();

$('#myForm').submit(function(e){
	e.preventDefault();
	if($('#myForm').valid){
		var dataString = $(this).serialize();
		$.ajax({
			type: "POST",
			url: formDataURL,
			success: function(data){
				$('#formdata').html(data);
				$('#myForm').clearForm();
			}
		});
	}
});

$.fn.clearForm = function () {
	return this.each(function () {

		var type = this.type;
		var tag = this.tagName.toLowerCase();

		if (tag == 'form') {
			return $(':input', this).clearForm();
		}
		if (type == 'text' || type == 'password' || type == 'email' || type == 'url' || tag == 'textarea') {
			this.value = '';
		}
		else if (type == 'checkbox' || type == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};