Meteor.publish("theComments",
  function(){return Comments.find();})

Meteor.publish("theSymptoms",
  function(){return Symptoms.find();})

  Meteor.publish("theIssues",
    function(name){return Issues.find();})

    Meteor.publish("theRides",
      function(){return Rides.find();})

Meteor.publish("userData",function(){
  if(this.userId){
    return Meteor.users.find({});
    //return Meteor.users.find({_id:this.userId},{fields:{profile:1,"service.google.email":1}});
  }
  else{
    this.ready();
  }
})

Meteor.publish("theSettings",function(){
  if(this.userId){
    return Settings.find({createdBy:this.userId});
  }
  else{
    this.ready();
  }
  ;})

  Meteor.publish("theDemographic",function(){
    if(this.userId){
      return Demographic.find({user:this.userId});
    }
    else{
      this.ready();
    }
    ;})
