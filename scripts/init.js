(function($){


	//handless receiving messages
	var pusher = new Pusher('9d62d9ae3a21c86ba24d');
	channel = pusher.subscribe('exercise-3-2');

	//Adds an event listener for the custom event triggered by Pusher
	channel.bind('send-message', function (data){
		var cont = $('#messages');
		console.log(cont);
		//Removes the placeholer LI if it's present
		cont.find('.no-messages').remove();

		//Adds the new message to the page
		console.log('add');
		$('<li>').html('<strong>'+data.name+':</strong>'+data.msg).appendTo(cont);
         //add a ping when message is sent
         var playPromise = audio.play();
         if(playPromise !== undefined){
            playPromise.then(_ => {
               // Automatic playback started!
              // Show playing UI.
              var audio = document.getElementById("audio");
              audio.play()
            })
            .catch(error => {
             // Auto-play was prevented
            alert('err');
           });
         }
	});
     	
	
	//Handles form submission
	$('form').submit(function(){
		//Posts the form data so it can be sent to other browsers
		$.post('post.php', $(this).serialize());
		//Empties the input
		$('#message').val('').focus();
		//Prevents the default form submission
		
		return false;
	});
    

	//Pusher log
	Pusher.log = function(msg){
		if(console && console.log){
			console.log(msg);
		}
	};

})(jQuery);