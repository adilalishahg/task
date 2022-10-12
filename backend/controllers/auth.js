const User = require('../models/users');
exports.register = (req, res) => {
  const { username, email, password, city } = req.body;

  // check if user exists in our db
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'Email is taken',
      });
    }
    // generate token with user name email and password
    const token = jwt.sign(
      { username, email, password, city },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '10m',
      }
    );
  });
};
