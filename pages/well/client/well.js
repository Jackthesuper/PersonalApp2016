Template.well.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-edit-preference': function(event){
        event.preventDefault();
        Router.go('/well4');
    },

    'click .js-edit-demographic': function(event){
        event.preventDefault();
        Router.go('/well5');
    },

    'click .js-go-basket': function(event){
        event.preventDefault();
        Router.go('/well2');
    },
});
