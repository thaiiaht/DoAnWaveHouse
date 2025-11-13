/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'

router.get('/', async ({ view }) => {
    return view.render('home')
})

router.post('/login', [AuthController, 'login'])
