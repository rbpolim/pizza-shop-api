import { Elysia } from 'elysia'

import { signOut } from './routes/sign-out'
import { getProfile } from './routes/get-profile'
import { sendAuthLink } from './routes/send-auth-link'
import { registerRestaurant } from './routes/register-restaurant'
import { authenticateFromLink } from './routes/authenticate-from-link'

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)
  .use(signOut)
  .use(getProfile)

app.listen(3333, () => {
  console.log('🔥 Server is running on port 3333')
})
