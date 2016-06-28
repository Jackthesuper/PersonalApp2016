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
		const cold = $(".js-cold").val();
		const hda = $(".js-hda").val();
		const hta = $(".js-hta").val();
		const sta = $(".js-sta").val();
		const diz = $(".js-diz").val();
		const issue =
		{offeredBy:name, bornOn:birthday, liveIn:address,days:[1,3,4]};
		console.dir(issue);
		//Issues.insert(issue);
		Meteor.call("insertIssue",issue);

	}
})
