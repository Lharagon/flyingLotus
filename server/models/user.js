var mongoose = require('mongoose');
var Shema = mongoose.Sechema


var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, maxlength: 20},
 });
mongoose.model('User', UserSchema);