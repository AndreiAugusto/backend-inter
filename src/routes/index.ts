import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json('Hello World!')
})
routes.get('/test', (request, response) => {
  return response.json('Hello World!')
})

export default routes
