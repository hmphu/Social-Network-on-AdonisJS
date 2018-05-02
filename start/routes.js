'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Route.on('/').render('pages/home')

Route.get('/', 'PageController.home')

//Authentification
Route.get('/register', 'AuthController.register')
Route.post('/register', 'AuthController.storeUser')
Route.get('/login', 'AuthController.login')
Route.post('/login', 'AuthController.loginUser')
Route.get('/forgot-password', 'AuthController.forgotPassword')
Route.get('/logout', 'AuthController.logout')


//api
Route.get('/api/initialApp', 'ApiController.initialApp') //(ajax axios pour le displayname)

Route.post('/api/post', 'PostController.store')
Route.post('/api/post/:id', 'PostController.update')
Route.get('/api/post/:id/delete', 'PostController.destroy')
