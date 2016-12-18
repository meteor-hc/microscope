Template.postsList.onCreated(function() {
  const self = this
  self.autorun(function() {
    self.subscribe('posts')
    self.subscribe('comments')
  })
})

Template.postsList.helpers({
   posts: () => Posts.find({}, {sort: {submitted: -1}})
})
