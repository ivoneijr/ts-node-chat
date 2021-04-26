/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

let admin_socket_id = null
let client_email = null
let socket = null

document.querySelector('#start_chat').addEventListener('click', event => {
  const chat_help = document.getElementById('chat_help')
  chat_help.style.display = 'none'

  const chat_in_support = document.getElementById('chat_in_support')
  chat_in_support.style.display = 'block'

  socket = io('/client')

  const email = document.getElementById('email').value
  client_email = email
  const text = document.getElementById('txt_help').value

  socket.on('connect', () => {
    const params = {
      email,
      text,
    }

    socket.emit('client:connected', params, (call, err) => {
      if (err) {
        console.err(err)
      } else {
        console.log(call)
      }
    })

    socket.on('client:all_messages', messages => {
      const template_client = document.getElementById('message-user-template')
        .innerHTML
      const template_admin = document.getElementById('admin-template').innerHTML

      messages.forEach(message => {
        if (message.admin_id === null) {
          const rendered = Mustache.render(template_client, {
            message: message.text,
            email,
          })

          document.getElementById('messages').innerHTML += rendered
        } else {
          const rendered = Mustache.render(template_admin, {
            message_admin: message.text,
          })

          document.getElementById('messages').innerHTML += rendered
        }
      })
    })
  })

  socket.on('admin-to-client:send_message_to_client', message => {
    admin_socket_id = message.socket_id

    const template_admin = document.getElementById('admin-template').innerHTML
    const rendered = Mustache.render(template_admin, {
      message_admin: message.text,
    })

    document.getElementById('messages').innerHTML += rendered
  })
})

document
  .querySelector('#send_message_button')
  .addEventListener('click', evt => {
    const text = document.getElementById('message_user')
    const params = {
      text: text.value,
      admin_socket_id,
    }
    socket.emit('client-to-admin:send_message_from_client', params)

    const template_client = document.getElementById('message-user-template')
      .innerHTML

    const rendered = Mustache.render(template_client, {
      message: text.value,
      email: client_email,
    })

    document.getElementById('messages').innerHTML += rendered

    text.value = ''
  })
