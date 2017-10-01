import io from 'socket.io-client'

export const connect = (url, callback) => {
  const socket = io(url)
  return new Promise(resolve => socket.on('connect', () => resolve({socket, callback})))
}

export const subscribe = (url, socket, callbackSocket, callback) => {
  socket.on(url, (res) => {
    callbackSocket(res)
  })
  return callback
}
