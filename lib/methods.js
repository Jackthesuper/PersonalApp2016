 Meteor.methods({
  //  insertRide: function(ride){
  //    Rides.insert(ride);
  //  },
   insertComments: function(comment){
     check(comment.text,String);
     check(comment.rating,Number);
     Comments.insert(comment);
   },
   //insertSettings: function(settings_object){
    // Settings.insert(settings_object);
   //},
   insertSettings: function(object){
     object.createdBy=this.userId;
     Settings.remove({createdBy:this.userId});

     Settings.insert(object);

   },

   removeComments: function(id){
     check(id, String);
     Comments.remove(id);
   },
   insertIssue: function(issue){
     check(issue.offeredBy,String);
     check(issue.birthday,String);
     check(issue.phone,String);
     check(issue.address,String)
     check(issue.arr,[String]);
     Issues.insert(issue);
   },
   removeIssuesAll: function(){
     Issues.remove({});
   },
  //  sayhilib: function(){
  //    console.log("hi!");
   //
  //  },
   insertSymptoms: function(symptoms_obj){
     check(symptoms_obj.text, String);
     Symptoms.insert(symptoms_obj);
   },
   removeSymptoms: function(id){
     check(id,String);
     Symptoms.remove(id);
   },

 })
