import router from '@adonisjs/core/services/router'
const AdminController = () => import('#controllers/admin_controller')
router 
.group(() => {
    router.get('/', [ AdminController, 'index']).as('index')
    router.patch('/role/:id', [ AdminController, 'role']).as('role')
    router.delete('/delete/:id', [AdminController, 'delete']).as('delete')
})
.as('admin')
.prefix('admin')