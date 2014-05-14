if (Meteor.isClient) {
  Router.map(function() {
    this.route('home', {path: '/'});
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
