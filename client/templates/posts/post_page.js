Template.postPage.onCreated(function() {
  const self = this
  self.autorun(function() {
    const postId = FlowRouter.getParam('_id')
    self.subscribe('singlePost', postId)
  })
})

Template.postPage.helpers({
    post: () => Posts.findOne()
})
