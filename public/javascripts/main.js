

// $.ajax({
// 	method:'GET',
// 	url:'http://localhost:3000/click'
// }).done(function(data){
// 	console.log(data);
// 	$('#fraseAleatoria').html(data.frase);
// 	fraseAl= data.frase;


// 	});

//ACA TENGO QUE HACER EL EVENTO CLICK
$('.foto-like').on('click', function(){
	const that =$(this)
	
	$.ajax({
		method:'PUT',
		url:'http://localhost:3000/like',
		data: {
		id: $(this).attr('data-id') //tengo que agarrar el ID que hice click
	}
}).done(function(data){
	console.log(that);
	that.siblings(".likes").html(data.likes)
});
})

//ACA CIERRO EL EVENTO CLICK