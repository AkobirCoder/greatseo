function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				lat: 53.798823,
				lng:-1.5426760000000286,
				name: "SEO Offce 1",
				street: "Over the rainbow, Up high way",
				userData: 99
			},
			// Random made up CUSTOM place

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


