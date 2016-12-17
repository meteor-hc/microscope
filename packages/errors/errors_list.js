Template.meteorErrors.helpers({
    errors: () => Errors.collection.find()
})

Template.meteorError.onRendered(function() {
    const error = this.data
    Meteor.setTimeout(() => Errors.collection.remove(error._id), 3000)
})
