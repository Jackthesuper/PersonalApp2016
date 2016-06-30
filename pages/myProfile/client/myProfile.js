Template.myProfile.events({
	"click .js-submit": function(event){
		console.log("hey you clicked the button");
    event.preventDefault();
		// read in the values of the input fields and store in variables
		const lastname = $(".js-lastname").val();
		const firstname = $(".js-firstname").val();
		const nickname = $(".js-nickname").val();
		const email = $(".js-email").val();
		const birthyear = $(".js-birthyear").val();
		const profile_object =
		{lastname:lastname, firstname:firstname, nickname: nickname, email:email, birthyear:birthyear, createdBy:Meteor.userId()};
		console.dir(profile_object);
		//Issues.insert(issue);
		Meteor.call("insertProfile",profile_object);
    Router.go('profiles');

	}
})
