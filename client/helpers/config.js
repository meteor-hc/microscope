Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
})

Posts.find().observe({
    added: function(post) {
    // quand le callback 'added' est déclenché, ajout de l'élément HTML
    // $('ul').append('<li id="' + post._id + '">' + post.title + '</li>')
    console.log("post added")
    },
    changed: function(post) {
    // quand le callback 'changed' est déclenché, modification du texte de l'élément HTML
    // $('ul li#' + post._id).text(post.title)
    console.log("post changed")
    },
    removed: function(post) {
    // quand le callback 'removed' est déclenché, suppression de l'élément HTML
    // $('ul li#' + post._id).remove()
    console.log("post removed")
    }
})

Meteor.startup(() =>
    Tracker.autorun(() =>
        console.log('There are ' + Posts.find().count() + ' posts')
    )
)
