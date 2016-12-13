FlowRouter.route('/', {
    action: () =>
        BlazeLayout.render("layout", {content: 'postsList'})
})

FlowRouter.route('/post/:_id', {
    name: 'singlePost',
    action: () =>
        BlazeLayout.render("layout", {content: 'postPage'})
})

FlowRouter.route('/submit', {
    name: 'postSubmit',
    action: () =>
        BlazeLayout.render("layout", {content: 'postSubmit'})
})

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("layout", {content: 'notFound'})
    }
}
