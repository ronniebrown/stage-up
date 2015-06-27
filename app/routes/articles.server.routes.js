'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
		// Article Routes
		app.route('/articles')



		.get(function(req, res, next) {
					mongoose.model('User').find({}, function(err, users) {
						if (err) {
							return console.error(err);
						} else {
							// send back all the profiles
						}
					})
				}



				.post(function(formData) { // this should be the form data. how to link user and profile without foreign keys?
						mongoose.model('User').create(formData);
					}, function(err, user) {
						if (err) {
							res.send("Problem");
						} else {
							console.log("user created: ", formData.basic.username)
							res.format({
								res.location("profile");
								res.redirect("/profile");
							})
						}
					};



					app.route('/articles/:articleId')
					.get(articles.read)
					.put(users.requiresLogin, articles.hasAuthorization, articles.update)
					.delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

					// Finish by binding the article middleware
					app.param('articleId', articles.articleByID);
				};
