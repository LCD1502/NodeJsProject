const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, required: true},
    description: { type: String, maxLength: 600},
    image: { type: String, maxLength: 255},
    slug:{type:String,maxLength:255},
    videoId:{type:String,required: true},
    level:{type:String,maxLength:255},
    slug: { type: String, slug: 'name', unique: true}
  }, {
    timestamps: true,
});

Course.plugin(mongooseDelete, { 
  deletedAt : true,
  //override method of mongoose
  overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
  