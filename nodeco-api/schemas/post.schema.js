const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = Promise;
const collectionName = 'post';

const modelSchema = new Schema(
   {
      title: String,
      content: String
    },
    {
      strict: true,
      timestamps: true
    }
);

module.exports = mongoose.model(collectionName, modelSchema);