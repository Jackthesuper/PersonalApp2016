Template.comments.helpers({
	commentsdata: function(){
		return Comments.find({},{sort:{createdAt:-1}, limit:30000});},


})

Template.comments.events({
	"click .js-submit-comment": function(event){
	   //console.dir(event);
		 event.preventDefault();
	   const comment_text = $(".js-user-comment").val();
	   if (comment_text=="") {
	   	window.alert("you must enter a comment!");
	   	return;
	   }
	   const comment_rating = parseInt($(".js-rating-comment").val());
	   const comment_obj =
	   {text: comment_text,
	   	rating:comment_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
			username: Meteor.user().username};
	    // userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    //Comments.insert(comment_obj);
			Meteor.call("insertComments",comment_obj);
	    $(".js-user-comment").val("bb");
	    //Router.go('/commentSubmit');
	    console.log("Did we get here????")
			console.log(Meteor.user().username);
	},
});

Template.commentRow.events({
	"click .js-delete-comment": function(event){
		console.log("clicked on the x");
		console.dir(this);
		//Comments.remove(this.comment._id);
		Meteor.call("removeComments",this.comment._id);
	},
})
