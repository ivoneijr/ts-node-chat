import { Namespace } from 'socket.io'

interface Handler {
  handle(namespace: Namespace)
}

export { Handler }
