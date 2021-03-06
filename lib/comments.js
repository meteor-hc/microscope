Comments = new Mongo.Collection('comments')

Meteor.methods({
    commentInsert: commentAttributes => {
        check(commentAttributes, {
          postId: String,
          body: String
        })
        const user = Meteor.user()
        const post = Posts.findOne(commentAttributes.postId)
        if (!post) {
          throw new Meteor.Error('invalid-comment', 'You must comment on a post')
        }
        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        })
        Posts.update(comment.postId, {$inc: {commentsCount: 1}})
        return Comments.insert(comment)
    }
})
