import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'


export default class AuthController {
    async index({ view }: HttpContext) {
        return view.render('home')
    }

    async login({ request, auth, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.verifyCredentials(email, password)
        await auth.use('web').login(user)
        response.redirect('/')
    }
}