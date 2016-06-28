 Meteor.methods({
   insertRide: function(ride){
     Rides.insert(ride);
   },
   insertIssue: function(issue){
     Issues.insert(issue);
   },
   sayhilib: function(){
     console.log("hi!");

   },
   insertSymptoms: function(symptoms_obj){
     Symptoms.insert(symptoms_obj);
   },
   removeSymptoms: function(id){
     Symptoms.remove(id);
   },

 })
