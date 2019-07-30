Template.well.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-edit-preference': function(event){
        event.preventDefault();
        console.log(this.userId);
        Router.go('/well4');
    }
});
