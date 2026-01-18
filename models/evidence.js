const mongoose = require('mongoose');

const evidenceSchema = new mongoose.Schema({

  case: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
    required: true
  },

  fileName: {
    type: String,
    required: true
  },

  filePath: {
    type: String,
    required: true
  },

  fileType: {
    type: String
  },

  fileSize: {
    type: Number
  },

  hash: {
    type: String,
    required: true   // SHA-256
  },

  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  description: {
    type: String
  },

  isVerified: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

const Evidence = mongoose.model('Evidence', evidenceSchema);

module.exports = Evidence;