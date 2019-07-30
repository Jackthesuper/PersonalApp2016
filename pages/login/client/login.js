Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        const username = $(".js-login-uname").val();
        const password = $(".js-login-psw").val();
        Meteor.loginWithPassword(username, password, function(error){
          if(error){
            event.preventDefault();
            console.log(error.reason);
            window.alert(error.reason);
            return;
          }else{
            Router.go('/well');
          }
        });
    },
});
