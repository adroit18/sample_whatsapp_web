const express = require("express");
const app = express();
const path = require('path');
const server = app.listen(8080);
var io = require('socket.io').listen(server);
app.use(express.static("dist"));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../../dist/index.html'));
});

io.on('connection', socket => {
  socket.on('messageSend',(data)=>{
    io.emit('newMessage', data);
  });
  socket.on('disconnect', () => {
  });
})
