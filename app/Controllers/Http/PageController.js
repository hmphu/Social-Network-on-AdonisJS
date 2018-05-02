'use strict'

class PageController {
  async home({response, request, view, auth}){

    if(auth.user) {

        return view.render('pages/react')
    } else {

        return view.render('pages/welcome')
    }
//Si l'user est co, on redirige directement a la homepage, sinon, on le redirige vers la page de connexion, cela permet de ne pas retomber sur la page de connexion si l user est co et que l'url est vide

  }
  async welcome({response, request, view,auth}){
    return view.render('pages/welcome')
  }
}

module.exports = PageController
