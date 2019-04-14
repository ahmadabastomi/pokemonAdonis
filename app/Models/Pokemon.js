'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
    category() {
        return this.belongsTo('App/Models/Category')
    }
    type() {
        return this
            .belongsToMany('App/Models/Type')
            .pivotModel('App/Models/PokemonType')
    }
}

module.exports = Pokemon
