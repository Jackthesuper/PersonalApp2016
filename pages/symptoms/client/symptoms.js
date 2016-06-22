Template.symptoms.helpers({
	symptomsdata: function(){
		return Symptoms.find({},{sort:{createdAt:-1}, limit:30000});},


})

Template.symptoms.events({
	"click .js-pusher": function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const symptoms_db = $(".js-user-symptoms").val();
	   if (symptoms_db=="") {
	   	window.alert("you must enter a comment!");
	   	return;
	   }
	   const symptoms_obj =
	   {text: symptoms_db,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Symptoms.insert(symptoms_obj);
	    $(".js-user-symptoms").val("");
	    //Router.go('/about');
	    console.log("Did we get here????")
	},
});

Template.symptomsRow.events({
"click .js-delete-symptoms": function(event){
	console.log("clicked on the x");
		console.dir(this);
		Symptoms.remove(this.symptom._id);
	},
})
