Meteor.startup(function () {

  if (Posts.find({}).count() === 0) {
    Posts.insert({
      title: Fake.sentence(),
      body: Fake.paragraph(),
      published: Fake.fromArray([true, false])
    });
  }

});
