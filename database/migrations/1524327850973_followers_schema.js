'use strict'

const Schema = use('Schema')

class FollowersSchema extends Schema {
  up () {
    this.create('followers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users') //unsigned signifie que c'est pas un nombre negatif
      table.integer('follow_id').unsigned().notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('followers')
  }
}

module.exports = FollowersSchema
