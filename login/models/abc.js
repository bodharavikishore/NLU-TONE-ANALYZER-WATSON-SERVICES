var mongoose = require('mongoose');
var user=mongoose.Schema({
  fname: {
      type: String,
      required: true
  },
  lname: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  }
});
var users=module.exports=mongoose.model('usercollection',user);
module.exports.adduser=function(data,callback){
  users.create(data,callback);
}
