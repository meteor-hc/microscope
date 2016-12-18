Template.postPage.onCreated(function() {
    const self = this
    self.autorun(() => {
        const postId = FlowRouter.getParam('_id')
        self.subscribe('singlePost', postId)
        self.subscribe('comments')
  })
})
Template.postPage.helpers({
    post: () => Posts.findOne(),
    comments: () => {
        const _id = FlowRouter.getParam('_id')
        return Comments.find({postId: _id})
    }
})
