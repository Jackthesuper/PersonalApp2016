Template.well2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    counter1:2,
    counter2:1,
    counter3:1,
    counter4:0,
    counter5:1,
  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.well2.helpers({
  theCounter: function(digit){
    const instance = Template.instance();
    return instance.state.get("counter"+digit);
  },

  theTotal: function(){
    const instance = Template.instance();
    return instance.state.get("counter1")+ instance.state.get("counter2")+ instance.state.get("counter3")+ instance.state.get("counter4")+ instance.state.get("counter5");
  },

  theRest: function(){
    const instance = Template.instance();
    return 10-(instance.state.get("counter1")+ instance.state.get("counter2")+ instance.state.get("counter3")+ instance.state.get("counter4")+ instance.state.get("counter5"));

  },
});


Template.well2.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-go-home': function(event){
        event.preventDefault();
        Router.go('/well');
    },

    'click .js-place-order': function(event){
        event.preventDefault();
        Router.go('/well3');
    },

    "click .js-pusher": function(event,instance){
      const counter = "counter"+event.target.dataset.message;
      const c = instance.state.get(counter);
      instance.state.set(counter,c+1);
    },

    "click .js-puller": function(event,instance){
      const counter = "counter"+event.target.dataset.message;
      const c = instance.state.get(counter);
      instance.state.set(counter,c-1);
    },

});
