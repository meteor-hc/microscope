Template.postSubmit.onCreated(() =>
    Session.set('postSubmitErrors', {})
)

Template.postSubmit.helpers({
    errorMessage: (field) => Session.get('postSubmitErrors')[field],
    errorClass: (field) => !!Session.get('postSubmitErrors')[field] ? 'has-error' : ''
})

Template.postSubmit.events({
    'submit form'(event) {
        event.preventDefault()
        const post = {
            url: event.target.url.value,
            title: event.target.title.value
        }
        const errors = validatePost(post)
        if (errors.title || errors.url) {
            return Session.set('postSubmitErrors', errors)
        }
        Meteor.call('postInsert', post, (error, result) => {
            if (error) {
              return throwError(error.reason)
            }
            if (result.postExists) {
              throwError('This link has already been posted')
            }
            FlowRouter.go('singlePost', {_id: result._id})
        })
    }
})
