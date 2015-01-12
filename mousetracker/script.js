
$(document).ready(function () {

	

	$('button').click(function() {

		var gridsize = prompt("Enter a value");
		gridgenerator(gridsize);

		$('.divin').mouseover(function () {

		$(this).css({'background-color': '#000000'});
	});
	});

	var gridgenerator = function(size) {
		$( ".container" ).empty();

		$('.container').width(size*22);
		$('.container').height(size*22);


		for (i=0; i<size*size; i++) 	{
			

			var newdiv = $('<div class ="divin"></div>');
			$('.container').prepend(newdiv);

		}	

			


	};



	



}) ;