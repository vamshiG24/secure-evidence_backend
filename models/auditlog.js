const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  action: {
    type: String,
    required: true
    // e.g. "CREATE_CASE", "UPLOAD_EVIDENCE", "DOWNLOAD_EVIDENCE", "DELETE_CASE"
  },

  resourceType: {
    type: String,
    enum: ['Case', 'Evidence', 'User'],
    required: true
  },

  resourceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  ipAddress: {
    type: String
  },

  userAgent: {
    type: String
  },

  status: {
    type: String,
    enum: ['SUCCESS', 'FAILED'],
    default: 'SUCCESS'
  },

  message: {
    type: String
  }

}, { timestamps: true });

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;