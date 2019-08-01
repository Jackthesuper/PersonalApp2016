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
     console.log("1");
	},

	'click .js-submit': function(event){
			event.preventDefault();
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
