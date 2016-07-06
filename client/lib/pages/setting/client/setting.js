Template.setting.helpers({
	getSettings:function(){
		return Settings.find({});
	}
})

Template.setting.events({
	"click .js-submit": function(event){
		console.log("hey you clicked the button");
    event.preventDefault();

    const name = $(".js-name").val();
    const gender = $(".js-gender").val();
    const height = $(".js-height").val();
    const weight = $(".js-weight").val();
    const settings_object =
    {offeredBy:name, genderIs:gender, heightIs:height, weightIs:weight ,createdBy:Meteor.userId()};
    console.dir(settings_object);
    //Issues.insert(issue);
    Meteor.call("insertSettings",settings_object);

	},
})
