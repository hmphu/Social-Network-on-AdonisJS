"use strict";
const { validate } = use("Validator"); //docu adonis
const Hash = use("Hash"); //equivalent aux requires
const User = use("App/Models/User"); //pour enregistrer en bdd

class AuthController {
  async register({ response, request, view }) {
    return view.render("auth/register");
  }
  async storeUser({ request, session, response, auth }) {
    //docu

    //Règle de validation
    const validation = await validate(request.all(), {
      email: "required|email|unique:users,email",
      password: "required|min:6|max:20", //Permet de demander un nombre minimum
      confirm_password: "required"
    });

    // test console .log
    // console.log(await auth.attempt(request.input('email'), request.input('password')))
    // return 'test'
    // return await Hash.make(validation._data.password) //cette commande test hash le pass
    // if (Hash.make(validation._data.password) == await Hash.make(validation._data.password)){ //test pour hash le pass
    // !!!!!CEPENDANT nous n'avons pas besoin de le faire, car adonis a déjà préparer ce genre de chose (faire adonis make:hook User) et voir la docu des hooK. Mais c'est bien de savoir comment faire :)!!!!!

    //Verification du match mdp
    if (request.input("password") == request.input("confirm_password")) {
      //verifie si la validation fail
      if (validation.fails()) {
        //docus adonis
        session.withErrors(validation.messages()).flashExcept(["password"]);

        return response.redirect("back");
      } else {
        //pour enregistrer en bdd via objet
        try {
          let newUser = await User.create({
            email: request.input("email"),
            password: request.input("password")
          });
        } catch (error) {
          //montre l'erreur si probleme avec la db
          console.log("error");
          session
            .withErrors([
              { field: "database", message: "probleme avec la base de donnée" }
            ])
            .flashExcept(["password"]);
          return response.redirect("back");
        }
        session.flash({notification: "BIENVENUE SUR NOTRE SUPER RESEAU SOCIAL lel"}); //gère le message en session flash uniquement au process register
        return response.redirect("/");
      }
    } else {
      //montre l erreur si le mdp ne match pas
      session
        .withErrors([
          {
            field: "password",
            message: "Vous devez confirmer votre mot de passe"
          },
          {
            field: "confirm_password",
            message: "Vous devez confirmer votre mot de passe"
          }
        ])
        .flashExcept(["password"]);

      return response.redirect("back");
    }
  }

  async login({ response, request, view }) {
    return view.render("auth/login");
  }
  async loginUser({ response, request, view, auth, session }) {
    //recuperer la donnée depuis le formulaire
    const postData = request.post();

    //trouver l'user depuis la database par son email
    const user = await User.query()
      .where("email", postData.email)
      .first();
    if (user) {
      //vérifier si le mot de passe est bon
      const passwordVerified = await Hash.verify(
        postData.password,
        user.password
      );

      if (passwordVerified) {
          //connecter l'utilisateur
        await auth.login(user);
        session.flash({notification: "Bon retour parmis nous !"})
        return response.redirect("/");
      } else {
        // si le mdp est incorrect
        session
          .withErrors([
            { field: "password", message: "Mot de passe incorrect" }
          ])
          .flashExcept(["password"]);
        return response.redirect("back");
      }
    } else {
      //Si on ne trouve pas l'utilisateur avec son Email
      session
        .withErrors([
          { field: "email", message: "Email incorrect" }
        ])
        .flashExcept(["password"]);
      return response.redirect("back");
    }

    //connecter l'utilisateur
    return request.post();
  }
  async forgotPassword({ response, request, view }) {
    return view.render("auth/forgotPassword");
  }
  async logout({ response, request, view, auth }) {
    try {
      await auth.logout();
      return response.redirect("/");
    } catch (error) {
      console.log(error);
      return " Erreur, déconnexion impossible";
    }
  }
}

module.exports = AuthController;
