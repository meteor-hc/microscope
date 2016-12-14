Template.postSubmit.events({
    'submit'(event) {
        event.preventDefault()
        const post = {
            url: event.target.url.value,
            title: event.target.title.value
        }
        Meteor.call('postInsert', post, (error, _id) => {
            if (error) {
                throw new Meteor.Error('Can\'t insert record', error.reason)
            }
            FlowRouter.go('singlePost', {_id: _id})
        })
    }
})
