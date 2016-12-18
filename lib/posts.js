Posts = new Mongo.Collection('posts')

validatePost = post => {
    const errors = {}
    if (!post.title) {
        errors.title = 'Please fill in a headline'
    }
    if (!post.url) {
        errors.url = 'Please fill in a URL'
    }
    return errors
}

checkOwner = currentPostId =>
    Posts.findOne(currentPostId).userId === Meteor.userId()

Meteor.methods({
    postInsert: post => {
        check(Meteor.userId(), String)
        check(post, {
          title: String,
          url: String
        })
        const errors = validatePost(post)
        if (errors.title || errors.url) {
            throw new Meteor.Error('invalid-post', 'You must set a title and URL for your post')
        }
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
            submitted: new Date(),
            commentsCount: 0
        }

        return {_id: Posts.insert(newPost)}
    },
    postUpdate: (currentPostId, post) => {
        check(currentPostId, String)
        check(post, {
          title: String,
          url: String
        })
        if (!checkOwner(currentPostId)) {
            throw new Meteor.Error('invalid-owner', 'You can\'t remove this post')
        }
        const errors = validatePost(post)
        if (errors.title || errors.url) {
            throw new Meteor.Error('invalid-post', 'You must set a title and URL for your post')
        }
        Posts.update(currentPostId, {$set: post})
    },
    postRemove: currentPostId => {
        if (!checkOwner(currentPostId)) {
            throw new Meteor.Error('invalid-owner', 'You can\'t remove this post')
        }
        Posts.remove(currentPostId)
    }
})
