'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  
  username: {
    type: String,
    unique: 'testing error message',
    required: 'Please fill in a username',
    trim: true
  },
  password: {
    type: String,
    default: '',
    // validate: [validateLocalStrategyPassword, 'Password should be longer']
  },
  basic: {
    location: {
      type: Number,
      // required: 'Please enter zip code.',
      value: '',
      trim: true
    },
    age: { //this should be changed to a birthdate that calculates age
      type: Number,
      value: '',
      trim: true
    },
    picture: {
      type: String, //a url. or another way?
      value: '',
      trim: true
    }
  },

  essay: {
    about: {
      type: String,
      description: 'how would others describe you?',
      value: '',
      trim: true
    },
    improvExperience: {
      type: String,
      description: 'where have you studied and for how long?',
      trim: true
    },
    otherExperience: {
      type: String,
      description: 'do you have any other acting or comedy experience?',
      value: '',
      trim: true
    },
    styles: {
      type: String,
      description: 'what forms or styles do you like?',
      value: '',
      trim: true
    },
    funny: {
      type: String,
      description: 'who or what is funny to you?',
      value: '',
      trim: true
    },
    favoriteShows: {
      type: String,
      description: 'favorite shows and movies:',
      value: '',
      trim: true
    },
    ideal: {
      type: String,
      description: 'what\'s your idea of the perfect group?',
      value: '',
      trim: true
    },
    workstyle: {
      type: String,
      description: 'how often do you want to meet, practice, or perform?',
      value: '',
      trim: true
    },
    lookingFor: {
      type: String,
      description: 'i\'m looking to connect with:',
      value: '',
      trim: true
    },

  },
  fixed: {
    age: {
      type: Number,
      description: 'age: ',
      value: null
    },
    gender: {
      type: String,
      description: 'age: ',
      value: null
    },
    ethnicity: {
      type: String,
      value: null
    },
    orientation: {
      type: String,
      value: null
    },
    politics: {
      type: String,
      value: null
    },
    experienceInYears: {
      type: Number,
      value: null
    },
    inClasses: {
      type: String,
      value: null
    },
    inGroup: {
      type: String,
      value: null
    },
    seeking: {
      type: String,
      value: null
    }
  },

  ratings: {
    politics: {
      type: Number,
      value: 0
    },
    edginess: {
      type: Number,
      value: 0
    },
    attitude: {
      type: Number,
      value: 0
    },
    ambition: {
      type: Number,
      value: 0
    },
    commitment: {
      type: Number,
      value: 0
    },
    diversity: {
      type: Number,
      value: 0
    },
    conflict: {
      type: Number,
      value: 0
    }
  }
});

mongoose.model('Article', ArticleSchema);
