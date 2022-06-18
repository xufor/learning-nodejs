const EventEmitter = require('events');

const celebrity = new EventEmitter();

celebrity.on('reached studio', () => {
    console.log('ask questions');
});

celebrity.on('reached studio', () => {
    console.log('click photos');
});

celebrity.emit('reached studio');



process.on('beforeExit', () => console.log('Exiting!'));
 