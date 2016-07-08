Template.symptoms_rd.onCreated(function() {
	this.templateDictionary=new ReactiveDict();
	this.templateDictionary.set('allcold',false);
	this.templateDictionary=new ReactiveDict();
	this.templateDictionary.set('allheadache',false);
});

Template.symptoms_rd.helpers({
	allcold: function(){
		return Template.instance().templateDictionary.get('allcold');
	},
	allheadache: function(){
		return Template.instance().templateDictionary.get('allheadache');
	},

});

Template.symptoms_rd.events({
	"change select": function(event,template){
		if($(event.target).val()==='cold'){
			template.templateDictionary.set('allcold',true);
			template.templateDictionary.set('allheadache',false);
		}
		else if($(event.target).val()==='hda'){
			template.templateDictionary.set('allcold',false);
			template.templateDictionary.set('allheadache',true);
		}
	},
});

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
	   	window.alert("you must enter a symptom!");
	   	return;
	   }
	   const symptoms_obj =
	   {text: symptoms_db,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
			Meteor.call("insertSymptoms",symptoms_obj);
	    //Symptoms.insert(symptoms_obj);
	    $(".js-user-symptoms").val("");
	    Router.go('/symptomsSubmit');
	    console.log("Did we get here????")
	},
});

Template.symptomsRow.events({
"click .js-delete-symptoms": function(event){
	console.log("clicked on the x");
		console.dir(this);
		//Symptoms.remove(this.symptom._id);
		Meteor.call("removeSymptoms",this.symptom._id);
	},
})
