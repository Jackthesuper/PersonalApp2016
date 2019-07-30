Template.well4.events({
    'click .js-submit': function(event){
        event.preventDefault();
        Router.go('/well');
    },

    'click .js-cancel': function(event){
        event.preventDefault();
        Router.go('/well');
    }
});
