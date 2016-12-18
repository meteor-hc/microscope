// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by errors.js.
import { name as packageName } from "meteor/pntbr:errors";

Tinytest.add("Errors - collection", test => {
    test.equal(Errors.collection.find({}).count(), 0)
    Errors.throw('A new error!')
    test.equal(Errors.collection.find({}).count(), 1)
    Errors.collection.remove({})
})

Tinytest.addAsync("Errors - template", (test, done) => {
    Errors.throw('A new error!')
    test.equal(Errors.collection.find({}).count(), 1)
    UI.insert(UI.render(Template.meteorErrors), document.body)
    Meteor.setTimeout(() => {
        test.equal(Errors.collection.find({}).count(), 0)
        done()
    }, 3500)
})
