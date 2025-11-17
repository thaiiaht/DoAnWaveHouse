import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'kiots'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.specificType('id','char(36)').primary()
      table.string('kiot_name', 255).notNullable()
      table.integer('capacity').notNullable()
      table.integer('current_quantity').notNullable()
      table.integer('available_space').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}