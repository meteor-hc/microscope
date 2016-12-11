Meteor.subscribe('posts')

Template.postsList.helpers({
    posts: Posts.find()
})
