import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AdminController {
    async index({ view }: HttpContext) {
        const user = await User.all()
        return view.render('admin', { user })
    }

    // change role
    async role({ request, response, params }: HttpContext) {
        try {
        const user = await User.findOrFail(params.id)

        const role = request.input('role')
        user.role = role
        await user.save()

        return response.json({
            success: true,
            message: 'Cập nhật role thành công',
            data: user,
        })
        } catch (error) {
        return response.status(400).json({
            success: false,
            message: 'Cập nhật role thất bại',
            error: error.message,
        })
      }
    }
    // delete user
    async delete({ params, response, session }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    session.flash('notification', {
        type: 'success',
        message: 'Deleted Successfully!',
    })
    return response.redirect().back()
    }
}