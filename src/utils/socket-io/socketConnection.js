import { io } from 'socket.io-client';

// type = sender || receiver
function socketConnection(type, roomId) {
  const socket = io(process.env.REACT_APP_BACKEND_URL);

  socket.on('connect', () => {
    console.log("I'm connected:", socket.id);

    const obj = {
      socketId: socket.id,
      type,
      roomId,
    };

    socket.emit('lobby', obj);

    socket.on('private message', (messageObj) => {
      console.log('new private message');
      console.log(messageObj);
    });
  });

  return socket;
}

export default socketConnection;
