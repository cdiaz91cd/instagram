
$('.foto-like').on('click', function () {
	const that = $(this)

	$.ajax({
		method: 'PUT',
		url: 'http://localhost:3000/like',
		data: {
			id: $(this).attr('data-id')
		}
	}).done(function (data) {
		console.log(that);
		that.siblings(".likes").html(data.likes)
	});
})

