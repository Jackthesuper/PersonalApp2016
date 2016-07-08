Template.issues.helpers({
	issues:function(){
		return Issues.find({});
	}
})

Template.issues.events({
	"click .js-addIssues": function(event){
		console.log("hey you clicked the button");
    event.preventDefault();
		// read in the values of the input fields and store in variables
		const name = $(".js-name").val();
		const birthday = $(".js-birthday").val();
		const phone = $(".js-phone").val();
		const address = $(".js-address").val();
		var arr = []
		const cold = $(".js-cold").val();
		const hda = $(".js-hda").val();
		const hta = $(".js-hta").val();
		const sta = $(".js-sta").val();
		const diz = $(".js-diz").val();
		if($('.js-cold').is(":checked")){
			arr.push("cold");
		}
		if($('.js-hda').is(":checked")){
			arr.push("headache");
		}
		if($('.js-hta').is(":checked")){
			arr.push("heartache");
		}
		if($('.js-sta').is(":checked")){
			arr.push("stomachache");
		}
		if($('.js-diz').is(":checked")){
			arr.push("dizzy");
		}

		const issue =
		{offeredBy:name, birthday, phone, address, arr};
		console.dir(issue);
		//Issues.insert(issue);
		Meteor.call("insertIssue",issue);


	},

	"click .js-delete": function(event){
		console.log("you clicked delete all");
		Meteor.call("removeIssuesAll");
	},
})
