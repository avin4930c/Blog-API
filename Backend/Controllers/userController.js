const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'luffy'

exports.register_get = asyncHandler(async (req, res) => {
    res.render('register_form', { title: 'Register' });
});

exports.login_get = asyncHandler(async (req, res) => {
    res.render('login_form', { title: 'Login' });
});

exports.register_post = asyncHandler(async (req, res) => {
    const { username, mail_address, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        mail_address,
        first_name,
        last_name,
        password: hashedPassword,
    });
    user.save()
    res.redirect('/user/login');
})

exports.login_post = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '2min' });
        req.session.token = token;
        req.session.user = { id: user._id, username: user.username };
        res.redirect('/');
      } else {
        res.status(401).send('Invalid username or password');
      }
});

exports.logout = asyncHandler(async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session', err);
            res.status(500).send('Server error');
        } else {
            res.redirect('/user/login'); // Redirect to login page after logout
        }
    });
});