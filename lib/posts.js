Posts = new Mongo.Collection('posts')

Meteor.methods({
    postInsert: post => {
        check(Meteor.userId(), String)
        check(post, {
          title: String,
          url: String
        })
    const postWithSameLink = Posts.findOne({url: post.url})
    if (postWithSameLink) {
        return {
            postExists: true,
            _id: postWithSameLink._id
        }
    }
    const newPost = {
        url: post.url,
        title: post.title,
        userId: Meteor.userId(),
        author: Meteor.user().username,
        submitted: new Date()
    }

    return {_id: Posts.insert(newPost)}
  }
})
