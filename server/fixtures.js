if (Posts.find().count() === 0) {
    Posts.insert(
        { title: 'Doc Meteor', url: 'https://github.com/meteor/docs' })
    Posts.insert(
        { title: 'Guide Blaze', url: 'http://blazejs.org' })
    Posts.insert(
        { title: 'Doc Meteor', url: 'https://github.com/meteor/docs' })
    Posts.insert(
        { title: 'scopyleft', url: 'http://scopyleft.fr' })
}
