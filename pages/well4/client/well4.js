Template.well4.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
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
