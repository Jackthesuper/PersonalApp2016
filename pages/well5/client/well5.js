Template.well5.helpers({
	'demographic': function(){
		return Demographic.findOne();
	}
})

Template.well5.events({
	'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
			Router.go('/login');
	},

	"change .js-select-weight": function(event,template){
	   const weight = $(event.target).val();
     const height = $(".js-height").val();
     const bmi = weight/ (height*height);
     $(".js-bmi").val(Math.round(bmi));
     console.log(bmi);
	},

	'click .js-submit': function(event){
			event.preventDefault();
			console.log("hey u clicked");
			const address = $(".js-address").val();
			const state = $(".js-select-state").val();
			const zipcode = $(".js-select-zipcode").val();
			const household = $(".js-select-household").val();
			const weight = $(".js-select-weight").val();
			const height = $(".js-height").val();
			const bmi = $(".js-bmi").val();
			const ddata=
			{user:Meteor.userId(), address:address, state:state, zipcode:zipcode, household:household, weight:weight, height:height, bmi:bmi};
			console.log(ddata);
			Meteor.call("submitDemographic", ddata);
			console.log("finished");
			Router.go('/well');
	},

	'click .js-cancel': function(event){
			event.preventDefault();
			Router.go('/well');
	},

	'click .js-go-home': function(event){
			event.preventDefault();
			Router.go('/well');
	},
});
