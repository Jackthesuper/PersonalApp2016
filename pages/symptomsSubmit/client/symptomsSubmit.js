Template.symptomsSubmit.events({
  "click .js-gohome" :function(event){
    event.preventDefault();
    Router.go('/');
  }

})
