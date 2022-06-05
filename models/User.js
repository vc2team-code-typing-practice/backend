const mongoose = require('mongoose');
require('mongoose-type-email');

const languageRecordSchema = new mongoose.Schema(
  {
    language: String,
    maxTypingSpeed: Number,
    accuracy: Number,
  },
  { timestamps: true },
);

const userSchema = new mongoose.Schema(
  {
    _id: String,
    email: mongoose.SchemaTypes.Email,
    name: String,
    hiscore: { type: Number, default: 0 },
    soundEffects: { type: Boolean, default: true },
    selectedLanguage: { type: String, default: 'c' },
    languageRecord: [languageRecordSchema],
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);
const LanguageRecord = mongoose.model('LanguageRecord', languageRecordSchema);

module.exports = { User, LanguageRecord };