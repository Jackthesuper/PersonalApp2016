Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/',{name:"home"});
Router.route('/about',{name:"about"});
Router.route('/symptoms',{name:"symptoms"});
Router.route('/comments',{name:"comments"});
Router.route('/symptomsDb',{name:"symptomsDb"});
Router.route('/commentSubmit',{name:"commentSubmit"});
Router.route('/draw',{name:"draw"});
Router.route('/showride/:_id',
       {name:"showRide",
        data: function(){
					const c = Rides.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);
