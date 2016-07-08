Template.quiz4.helpers({
  getBios:function(){
		return Bios.find({});
	}
})

Template.quiz4.events({
  "click .js-pusher": function(event){
		console.log("hey you clicked the button");
    event.preventDefault();
		// read in the values of the input fields and store in variables
		const bioname = $(".js-bioname").val();
		const biostuff = $(".js-biostuff").val();

		const bio_object =
		{offeredBy:bioname, text:biostuff};
		console.dir(bio_object);
		//Issues.insert(issue);
		Meteor.call("insertBio",bio_object);


	},

})
