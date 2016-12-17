Template.postEdit.onCreated(function() {
    const self = this
    self.autorun(() => {
        const postId = FlowRouter.getParam('_id')
        self.subscribe('singlePost', postId)
  })
  Session.set('postEditErrors', {})
})

Template.postEdit.helpers({
    errorMessage: (field) => Session.get('postEditErrors')[field],
    errorClass: (field) => !!Session.get('postEditErrors')[field] ? 'has-error' : ''
})

Template.postEdit.helpers({
    post: () => Posts.findOne()
})

Template.postEdit.events({
    'submit form': event => {
        event.preventDefault()
        const currentPostId = FlowRouter.getParam('_id')
        const post = {
            url: event.target.url.value,
            title: event.target.title.value
        }
        const errors = validatePost(post)
        if (errors.title || errors.url) {
            return Session.set('postEditErrors', errors)
        }
        Meteor.call('postUpdate', currentPostId, post, (error, result) => {
            if (error) {
              return throwError(error.reason)
            }
            FlowRouter.go('singlePost', {_id: currentPostId})
        })
    },
    'click .delete': event => {
        event.preventDefault()
        const currentPostId = FlowRouter.getParam('_id')
        Meteor.call('postRemove', currentPostId)
        FlowRouter.go('postsList')
    }
})
