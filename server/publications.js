Meteor.publish('posts', () => Posts.find())
Meteor.publish('comments', (postId) => {
    check(postId, String)
    return Comments.find({postId: postId})
})
Meteor.publish('singlePost', id => {
    check(id, String)
    Meteor._sleepForMs(1000)
    return Posts.find({_id: id})
})
