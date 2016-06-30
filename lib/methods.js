 Meteor.methods({
  //  insertRide: function(ride){
  //    Rides.insert(ride);
  //  },
  //  insertComments: function(comment){
  //    Comments.insert(comment);
  //  },
  //  insertSettings: function(settings_object){
  //    Settings.insert(settings_object);
  //  },
  //  removeComments: function(id){
  //    Comments.remove(id);
  //  },
  //  insertIssue: function(issue){
  //    Issues.insert(issue);
  //  },
  //  removeIssuesAll: function(){
  //    Issues.remove({});
  //  },
  //  sayhilib: function(){
  //    console.log("hi!");
   //
  //  },
  //  insertSymptoms: function(symptoms_obj){
  //    Symptoms.insert(symptoms_obj);
  //  },
  //  removeSymptoms: function(id){
  //    Symptoms.remove(id);
  //  },

  insertProfile: function(object){
    UserProfiles.insert(object);
  }

 })
