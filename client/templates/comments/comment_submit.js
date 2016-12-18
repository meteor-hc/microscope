Template.commentSubmit.onCreated(() =>
    Session.set('commentSubmitErrors', {})
)

Template.commentSubmit.helpers({
    errorMessage: field =>
        Session.get('commentSubmitErrors')[field],
    errorClass: field =>
        !!Session.get('commentSubmitErrors')[field] ? 'has-error' : ''
})

Template.commentSubmit.events({
    'submit form': (event) => {
        event.preventDefault()
        const body = event.target.body
        const comment = {
            body: body.value,
            postId: FlowRouter.getParam('_id')
        }
        const errors = {}
        if (!comment.body) {
            errors.body = 'Please write some content'
            return Session.set('commentSubmitErrors', errors)
        }
        Meteor.call('commentInsert', comment, (error, commentId) => {
            if (error){
                return Errors.throw(error.reason)
            } else {
                body.val('')
            }
        })
    }
})
