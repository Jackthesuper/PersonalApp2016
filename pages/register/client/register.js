Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        const username = event.target.registerUname.value;
        const password = event.target.registerPassword.value;
        const object =
        {username: username, password: password};
        // console.dir(object);
        // Meteor.call("insertUser",object);
        Accounts.createUser({
            username: object.username,
            password: object.password,
        },function(error){
          if(error){
            console.log(error.reason);
            window.alert(error.reason);
            return;
          }else{
            Router.go('/');
          }
        });
    }
});
