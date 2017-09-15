import socketConnect from './socketConnect';

const init = () => {
  socketConnect.init('localhost:3000');
}

export default init;