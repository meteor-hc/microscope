Template.postSubmit.events({
    'submit'(event) {
        event.preventDefault()
        const post = {
            url: event.target.url.value,
            title: event.target.title.value
        }

        console.log('post before', post)
        post._id = Posts.insert(post)
        FlowRouter.go('singlePost', {_id: post._id})
    }
})
