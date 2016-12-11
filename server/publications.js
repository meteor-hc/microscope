Meteor.publish('posts', () => Posts.find())
Meteor.publish('singlePost', id => {
  // check(id, String)
  Meteor._sleepForMs(1000)
  return Posts.find({_id: id})
})
