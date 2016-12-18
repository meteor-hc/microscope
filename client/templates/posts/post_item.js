Template.postItem.helpers({
    domain: function () {
        const a = document.createElement('a')
        a.href = this.url
        return a.hostname
    },
    ownPost: function() {
      return this.userId === Meteor.userId()
    },
    pathForPost: function() {
        const params = { _id: this._id}
        const routeName = 'singlePost'
        return FlowRouter.path(routeName, params)
        return `/post/${params._id}`
    },
    commentsCount: function() {
        return Comments.find({postId: this._id}).count()
    }
})
