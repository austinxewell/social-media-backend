const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: ["**use thoughSchema**"],
        friends: [UserSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        // id: false
      }
);

  // get total count of friends
  UserSchema.virtual('replyCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;