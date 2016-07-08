Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/',{name:"home"});
Router.route('/about',{name:"about"});
Router.route('/symptoms',{name:"symptoms"});
Router.route('/comments',{name:"comments"});
Router.route('/symptomsDb',{name:"symptomsDb"});
Router.route('/commentSubmit',{name:"commentSubmit"});
// Router.route('/quiz1',{name:"quiz1"});
// Router.route('/draw',{name:"draw"});
// Router.route('/testing',{name:"testing"});
Router.route('/setting',{name:"setting"});
Router.route('/symptomsSubmit',{name:"symptomsSubmit"});
// Router.route('/showRides');
Router.route('/issues');
// Router.route('/showride/:_id',
//        {name:"showRide",
//         data: function(){
//           check(this.params._id, String);
// 					const c = Rides.findOne({_id:this.params._id});
// 					console.dir(c);
// 					return c
// 				}
//   		 }
// );
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
