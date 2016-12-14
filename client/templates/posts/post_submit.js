Template.postSubmit.events({
    'submit form'(event) {
        event.preventDefault()
        const post = {
            url: event.target.url.value,
            title: event.target.title.value
        }
        Meteor.call('postInsert', post, (error, result) => {
            if (error) {
                throw new Meteor.Error('Can\'t insert record', error.reason)
            }

            if (result.postExists) {
                alert('This link has already been posted')
            }
            FlowRouter.go('singlePost', {_id: result._id})
        })
    }
})
