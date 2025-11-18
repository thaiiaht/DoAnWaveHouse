import { HttpContext } from '@adonisjs/core/http'
import DeliveryLog from '#models/delivery_log'
import transmit from '@adonisjs/transmit/services/main'

export default class WarehouseController {
    async handleArrival({ request, response }: HttpContext) {
        const { kiot, quantity } = request.body()
        await DeliveryLog.create({
            kiot: kiot,
            quantity: quantity,
        })

        const payload = {
            title: 'Xe hàng đang đến!',
            message: `Xe hàng đang tới ${kiot} và mang theo ${quantity} kiện hàng.`
        }
        transmit.broadcast(`/notification`, payload)
        return response.ok({ success: true })
    }
}