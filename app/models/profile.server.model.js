// <<<<<<< HEAD
// var thisnewschema = {
    //   basic: {
    //     username: {
    //       type: String,
    //       unique: 'testing error message',
    //       required: 'Please fill in a username',
    //       value: '',
    //       trim: true
    //     },
    //     location: {
    //       type: Number,
    //       required: 'Please enter zip code.',
    //       value: '',
    //       trim: true
    //     },
    //     age: { //this is a birthdate that calculates age
    //       type: Date,
    //       value: '',
    //       trim: true
    //     },
    //     picture: {
    //       type: String, //a url. or another way?
    //       value: '',
    //       trim: true
    //     }
    //   },

    //   essay: {
    //     about: {
    //       type: String,
    //       description: 'how would others describe you?',
    //       unique: 'testing error message',
    //       required: 'please enter a description',
    //       value: '',
    //       trim: true
    //     },
    //     improvExperience: {
    //       type: String,
    //       description: 'where have you studied and for how long?',
    //       unique: 'testing error message',
    //       trim: true
    //     },
    //     otherExperience: {
    //       type: String,
    //       description: 'do you have any other acting or comedy experience?',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },
    //     styles: {
    //       type: String,
    //       description: 'what forms or styles do you like?',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },
    //     funny: {
    //       type: String,
    //       description: 'who or what is funny to you?',
    //       unique: 'testing error message',
    //       required: 'please enter a description',
    //       value: '',
    //       trim: true
    //     },
    //     favoriteShows: {
    //       type: String,
    //       description: 'favorite shows and movies:',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },
    //     ideal: {
    //       type: String,
    //       description: 'what\'s your idea of the perfect group?',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },
    //     workstyle: {
    //       type: String,
    //       description: 'how often do you want to meet, practice, or perform?',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },
    //     lookingFor: {
    //       type: String,
    //       description: 'i\'m looking to connect with:',
    //       unique: 'testing error message',
    //       value: '',
    //       trim: true
    //     },

    //   },
    //   fixed: {
    //     age: {
    //       type: Number,
    //       value: null
    //     },
    //     gender: {
    //       type: String,
    //       value: null
    //     },
    //     ethnicity: {
    //       type: String,
    //       value: null
    //     },
    //     orientation: {
    //       type: String,
    //       value: null
    //     },
    //     politics: {
    //       type: String,
    //       value: null
    //     },
    //     experienceInYears: {
    //       type: Number,
    //       value: null
    //     },
    //     education: {
    //       type: String,
    //       value: null
    //     },
    //     inClasses: {
    //       type: String,
    //       value: null
    //     },
    //     inGroup: {
    //       type: String,
    //       value: null
    //     },
    //     seeking: {
    //       type: String,
    //       value: null
    //     }
    //   },

    //   ratings: {
    //     politics: {},
    //     lightDark: {},
    //     experimentalTraditional: {},
    //     commitment: {},
    //     diversityInterest: {}
    //   }
    // };


// =======
// 'use strict';

// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema;

// /**
//  * Profile Schema
//  */
// var ProfileSchema = new Schema({
// 	name: {
// 		type: String,
// 		default: '',
// 		required: 'Please fill Profile name',
// 		trim: true
// 	},
// 	created: {
// 		type: Date,
// 		default: Date.now
// 	},
// 	user: {
// 		type: Schema.ObjectId,
// 		ref: 'User'
// 	}
// });

// mongoose.model('Profile', ProfileSchema);
// >>>>>>> 586bc3839904354353bae232afe01b1f7c17960e
