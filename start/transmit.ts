import transmit from '@adonisjs/transmit/services/main'

transmit.authorize('/notification', async () => {
  return true
})