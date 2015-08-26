var io = require('socket.io')();

io.on('connection', function(socket){
   console.log('a user connected');
   socket.on('group_message', function(msg){
      socket.broadcast.emit('group_message', { msg: msg.msg, client_id: msg.client_id});
      console.log("received: ", msg);
      console.log(socket.id);
   });
});

module.exports = io;

