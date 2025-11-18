import router from '@adonisjs/core/services/router'

import WarehouseController from '#controllers/warehouse_controller'

router.post('/api/iot/arrival', [WarehouseController, 'handleArrival'])