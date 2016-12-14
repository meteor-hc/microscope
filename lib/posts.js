Posts = new Mongo.Collection('posts')

Meteor.methods({
    postInsert: post => {
        check(Meteor.userId(), String)
        check(post, {
          title: String,
          url: String
        })

    const newPost = {
        url: post.url,
        title: post.title,
        userId: Meteor.userId(),
        author: Meteor.user().username,
        submitted: new Date()
    }

    return Posts.insert(newPost)
  }
})
