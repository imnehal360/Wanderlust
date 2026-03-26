const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
  res.render("./users/signup.ejs");
};

module.exports.signUpUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to WanderLust! You are logged in!");
      return res.redirect("/listings");
    });

  } catch (e) {
    req.flash("error", e.message);
    return res.redirect("/signup"); // ✅ FIXED
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("./users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "Welcome back to wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  return res.redirect(redirectUrl); // ✅ FIXED
};

module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // ✅ FIXED
    }
    req.flash("success", "You are logged out!");
    return res.redirect("/listings"); // ✅ safer
  });
};