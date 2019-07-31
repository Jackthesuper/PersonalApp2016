Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/',{name:"home"});
Router.route('/about',{name:"about"});
Router.route('/symptoms',{name:"symptoms"});
Router.route('/comments',{name:"comments"});
Router.route('/symptomsDb',{name:"symptomsDb"});
Router.route('/commentSubmit',{name:"commentSubmit"});
Router.route('/quiz1',{name:"quiz1"});
Router.route('/draw',{name:"draw"});
Router.route('/testing',{name:"testing"});
Router.route('/sponsors',{name:"sponsors"});
Router.route('/setting',{name:"setting"});
Router.route('/well',{name:"well"});
Router.route('/well2',{name:"well2"});
Router.route('/well3',{name:"well3"});
Router.route('/well4',{name:"well4"});
Router.route('/well5',{name:"well5"});
Router.route('/login',{name:"login"});
Router.route('/register',{name:"register"});
Router.route('/symptomsSubmit',{name:"symptomsSubmit"});
Router.route('/showRides');
Router.route('/issues');
Router.route('/showride/:_id',
       {name:"showRide",
        data: function(){
          check(this.params._id, String);
					const c = Rides.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);
Router.route('/showIssues/:_id',
       {name:"showIssue",
        data: function(){
          check(this.params._id, String);
					const c = Issues.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);
