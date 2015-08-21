
exports.initializeSocketIo = function(io) {
  console.log('the io thing: ',io);
     io.on('connection', function(socket){
         console.log('a user connected');
     });
}
