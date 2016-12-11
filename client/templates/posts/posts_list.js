const postsData = [
    {
        title: 'Guide Meteor',
        url: 'https://guide.meteor.com'
    },
    {
        title: 'Guide Blaze',
        url: 'http://blazejs.org'
    },
    {
        title: 'Doc Meteor',
        url: 'https://github.com/meteor/docs'
    }
]

Template.postsList.helpers({
    posts: postsData
})
