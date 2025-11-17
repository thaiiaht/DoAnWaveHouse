import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Kiot extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare kiotName: string

  @column()
  declare capacity: number

  @column()
  declare currentQuantity: number

  @column()
  declare availableSpace: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}