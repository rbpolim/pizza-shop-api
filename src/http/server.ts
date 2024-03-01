import { Elysia } from 'elysia'

import { signOut } from './routes/sign-out'
import { getProfile } from './routes/get-profile'
import { sendAuthLink } from './routes/send-auth-link'
import { registerRestaurant } from './routes/register-restaurant'
import { authenticateFromLink } from './routes/authenticate-from-link'
import { getManagedRestaurant } from './routes/get-managed-restaurant'

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)
  .use(signOut)
  .use(getProfile)
  .use(getManagedRestaurant)

app.listen(3333, () => {
  console.log('🔥 Server is running on port 3333')
})
