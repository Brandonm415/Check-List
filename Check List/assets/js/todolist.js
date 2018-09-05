//IMPORTANT: Use .on() because it will add listeners for all potential FUTURE elements
// .click() only adds listeners for EXISTING elements


// check off specific todos by clicking
$("ul").on("click", "li", function(){
	//toggles the css on and off
	$(this).toggleClass("completed");
});


// delete li from clicking span
$("ul").on("click", "span", function(event){
	//add remove into fadeOut function so that the remove occurs AFTER the fadeout finishes
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//stop click listener from bubbling 
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// check if pressed button equals to enter key
	if(event.which === 13){
		// set new var to grab and equal entered text
		var todoText = $(this).val();
		//set input field empty after enter
		$(this).val("");
		//create new li with var to add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});