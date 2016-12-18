// Fixture data
if (Posts.find().count() === 0) {
  const now = new Date().getTime()

  // create two users
  const tomId = Meteor.users.insert({
    profile: { name: 'Tom' }
  })
  const tom = Meteor.users.findOne(tomId)
  const sachaId = Meteor.users.insert({
    profile: { name: 'Pntbr' }
  })
  const sacha = Meteor.users.findOne(sachaId)

  const telescopeId = Posts.insert({
    title: 'Introducing Microscope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://pntbr.fr',
    submitted: new Date(now - 7 * 3600 * 1000)
  })

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  })

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  })

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000)
  })

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000)
  })
}
