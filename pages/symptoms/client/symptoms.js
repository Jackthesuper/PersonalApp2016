Template.symptoms.helpers({
	commentsdata: function(){
		return Symptoms.find({},{sort:{createdAt:-1}, limit:30000});},


})

Template.comments.events({
	"click .js-submit-symptoms": function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const symptoms_db = $(".js-user-symptoms").val();
	   if (symptoms_db=="") {
	   	window.alert("you must enter a comment!");
	   	return;
	   }
	   const symptoms_rating = $(".js-rating-symptoms").val();
	   const symptoms_obj =
	   {text: symptoms_db,
	   	rating:symptoms_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Symptoms.insert(symptoms_obj);
	    $(".js-user-symptoms").val("");
	    Router.go('/about');
	    console.log("Did we get here????")
	},
});

//Template.commentRow.events({
//	"click .js-delete-comment": function(event){
//		console.log("clicked on the x");
//		console.dir(this);
//		Comments.remove(this.comment._id);
//	},
//})
