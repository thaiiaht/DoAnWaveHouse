import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'

export default class DeliveryLog extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare kiot: string

  @column()
  declare quantity: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @beforeCreate()
  public static assignUuid( delivery_log: DeliveryLog){
    delivery_log.id = uuidv4()
  }
}