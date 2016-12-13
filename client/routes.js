const loggin = FlowRouter.group({
    triggersEnter: [(context, redirect) => {
        if (!Meteor.userId()) {
            FlowRouter.go('denied')
        }
    }]
})

Accounts.onLogout(() => FlowRouter.go('/'))

FlowRouter.route('/denied', {
    name: 'denied',
    action: () =>
        BlazeLayout.render("layout", {content: 'accessDenied'})
})

FlowRouter.route('/denied', {
    action: () =>
        BlazeLayout.render("layout", {content: 'accessDenied'})
})

FlowRouter.route('/', {
    action: () =>
        BlazeLayout.render("layout", {content: 'postsList'})
})

FlowRouter.route('/post/:_id', {
    name: 'singlePost',
    action: () =>
        BlazeLayout.render("layout", {content: 'postPage'})
})

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("layout", {content: 'notFound'})
    }
}

loggin.route('/submit', {
    name: 'postSubmit',
    action: () =>
        BlazeLayout.render("layout", {content: 'postSubmit'})
})
