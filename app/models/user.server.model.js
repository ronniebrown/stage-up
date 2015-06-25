'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  crypto = require('crypto');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
  return (this.provider !== 'local' || (password && password.length > 6));
};

/**
 * User Schema
 */
var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateLocalStrategyProperty, 'Please fill in your first name']
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
    validate: [validateLocalStrategyProperty, 'Please fill in your last name']
  },
  displayName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: '',
    validate: [validateLocalStrategyProperty, 'Please fill in your email'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  username: {
    type: String,
    unique: 'testing error message',
    required: 'Please fill in a username',
    trim: true
  },
  password: {
    type: String,
    default: '',
    validate: [validateLocalStrategyPassword, 'Password should be longer']
  },
  salt: {
    type: String
  },
  provider: {
    type: String,
    required: 'Provider is required'
  },
  providerData: {},
  additionalProvidersData: {},
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: ['user']
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  /* For reset password */
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },

  basic: {
    username: {
      type: String,
      unique: 'testing error message',
      required: 'Please fill in a username',
      value: '',
      trim: true
    },
    location: {
      type: Number,
      required: 'Please enter zip code.',
      value: '',
      trim: true
    },
    age: { //this is a birthdate that calculates age
      type: Date,
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
      unique: 'testing error message',
      required: 'please enter a description',
      value: '',
      trim: true
    },
    improvExperience: {
      type: String,
      description: 'where have you studied and for how long?',
      unique: 'testing error message',
      trim: true
    },
    otherExperience: {
      type: String,
      description: 'do you have any other acting or comedy experience?',
      unique: 'testing error message',
      value: '',
      trim: true
    },
    styles: {
      type: String,
      description: 'what forms or styles do you like?',
      unique: 'testing error message',
      value: '',
      trim: true
    },
    funny: {
      type: String,
      description: 'who or what is funny to you?',
      unique: 'testing error message',
      required: 'please enter a description',
      value: '',
      trim: true
    },
    favoriteShows: {
      type: String,
      description: 'favorite shows and movies:',
      unique: 'testing error message',
      value: '',
      trim: true
    },
    ideal: {
      type: String,
      description: 'what\'s your idea of the perfect group?',
      unique: 'testing error message',
      value: '',
      trim: true
    },
    workstyle: {
      type: String,
      description: 'how often do you want to meet, practice, or perform?',
      unique: 'testing error message',
      value: '',
      trim: true
    },
    lookingFor: {
      type: String,
      description: 'i\'m looking to connect with:',
      unique: 'testing error message',
      value: '',
      trim: true
    },

  },
  fixed: {
    age: {
      type: Number,
      description: "age: ",
      value: null
    },
    gender: {
      type: String,
      description: "age: ",
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
    education: {
      type: String,
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
    lightDark: {
      type: Number,
      value: 0
    },
    experimentalTraditional: {
      type: Number,
      value: 0
    },
    commitment: {
      type: Number,
      value: 0
    },
    diversityInterest: {
      type: Number,
      value: 0
    }
  }
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
  if (this.password && this.password.length > 6) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(password) {
  if (this.salt && password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
  } else {
    return password;
  }
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};

/**
 * Find possible not used username
 */
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
  var _this = this;
  var possibleUsername = username + (suffix || '');

  _this.findOne({
    username: possibleUsername
  }, function(err, user) {
    if (!err) {
      if (!user) {
        callback(possibleUsername);
      } else {
        return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
      }
    } else {
      callback(null);
    }
  });
};

mongoose.model('User', UserSchema);
