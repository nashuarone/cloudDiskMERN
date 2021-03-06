const {Schema, model, ObjectId} = require('mongoose')

const User = new Schema({
  email: { type: 'string', required: true, unique: true },
  password: { type: 'string', required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: 'string' },
  files: [{ type: ObjectId, ref: "File" }]
});

module.exports = model("User", User);
