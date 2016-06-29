Meteor.publish("theComments",
  function(){return Comments.find();})

Meteor.publish("theSymptoms",
  function(){return Symptoms.find();})

  Meteor.publish("theIssues",
    function(){return Issues.find();})

    Meteor.publish("theRides",
      function(){return Rides.find();})

Meteor.publish("userData",function(){
  if(this.userId){
    //return Meteor.users.find({});
    return Meteor.users.find({_id:this.userId},{fields:{profile:1,"service.google.email":1}});
  }
  else{
    this.ready();
  }
})
