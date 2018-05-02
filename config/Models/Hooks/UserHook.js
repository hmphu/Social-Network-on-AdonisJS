'use strict'

const Hash = use('Hash')

const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (userInstance) => {
  if (userIntance.password){
    userInstance.password = await Hash.make(userInstance.password)
  }
}
