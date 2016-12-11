FlowRouter.route('/', {
    action: () =>
        BlazeLayout.render("layout", {content: 'postsList'})
})

FlowRouter.route('/post/:_id', {
    action: () =>
        BlazeLayout.render("layout", {content: 'postPage'})
})

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("layout", {content: 'notFound'})
    }
}
