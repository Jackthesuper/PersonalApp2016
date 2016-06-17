Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/',{name:"home"});
Router.route('/about',{name:"about"});
Router.route('/symptoms',{name:"symptoms"});
Router.route('/comments',{name:"comments"});
Router.route('/symptomsDb',{name:"symptomsDb"});
Router.route('/commentSubmit',{name:"commentSubmit"});
