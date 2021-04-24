/* eslint-disable no-undef */
const socket = io('/admin')
let connectionsList = []

socket.on('admin:awaiting_list', awaitingList => {
  connectionsList = awaitingList

  document.getElementById('list_users').innerHTML = ''
  const template = document.getElementById('template').innerHTML

  awaitingList.forEach(conn => {
    const rendered = Mustache.render(template, {
      email: conn.user.email,
      id: conn.socket_id,
    })

    document.getElementById('list_users').innerHTML += rendered
  })
})

function call(id) {
  const connection = connectionsList.find(conn => conn.socket_id === id)

  const template = document.getElementById('admin_template').innerHTML

  const rendered = Mustache.render(template, {
    email: connection.user.email,
    id: connection.user_id,
  })

  document.getElementById('supports').innerHTML += rendered

  const params = {
    user_id: connection.user_id,
  }
  socket.emit('admin:list_messages_by_user', params, messages => {
    const divMessages = document.getElementById(
      `allMessages${connection.user_id}`
    )

    messages.forEach(message => {
      const createdDiv = document.createElement('div')

      if (message.admin_id === null) {
        createdDiv.className = 'admin_message_client'

        createdDiv.innerHTML = `<span>${connection.user.email} - ${message.text}</span>`
        createdDiv.innerHTML += `<span class="admin_date">${message.created_at}</span>`
      } else {
        createdDiv.className = 'admin_message_admin'

        createdDiv.innerHTML = `Atendente: <span> - ${message.text}</span>`
        createdDiv.innerHTML += `<span class="admin_date">${message.created_at}</span>`
      }

      divMessages.appendChild(createdDiv)
    })
  })
}

function sendMessage(id) {
  const text = document.getElementById(`send_message_${id}`)

  const params = {
    text: text.value,
    user_id: id,
  }

  socket.emit('admin-to-client:send_message_from_admin', params)

  const divMessages = document.getElementById(`allMessages${id}`)

  const createdDiv = document.createElement('div')
  createdDiv.className = 'admin_message_admin'
  createdDiv.innerHTML = `Atendente: <span> - ${params.text}</span>`
  createdDiv.innerHTML += `<span class="admin_date">AGORA</span>`

  divMessages.appendChild(createdDiv)

  text.value = ''
}

socket.on('client-to-admin:send_message_from_admin', data => {
  const connection = connectionsList.find(
    conn => conn.socket_id === data.socket_id
  )
  const divMessages = document.getElementById(
    `allMessages${connection.user_id}`
  )
  const createdDiv = document.createElement('div')

  createdDiv.className = 'admin_message_client'

  createdDiv.innerHTML = `<span>${connection.user.email} - ${data.message.text}</span>`
  createdDiv.innerHTML += `<span class="admin_date">${data.message.created_at}</span>`

  divMessages.appendChild(createdDiv)
})
