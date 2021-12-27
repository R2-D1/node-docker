const User = require("../models/userModel");
const bcrypt = require("bcryptjs")

exports.sungUp = async (request, response) => {
    request.body.password = await bcrypt.hash(request.body.password, 12);

    try {
        const newUser = await User.create(request.body);
        response.status(201).json({
            status: 'success',
            data: newUser,
        })
    } catch (error) {
        response.status(400).json({
            status: 'fail',
            error: error.message,
        })
    }
}

exports.login = async (request, response) => {
    const {username, password} = request.body;

    try {
        const user = await User.findOne({username});
        if (!user) {
            return response.status(404).json({
                status: 'fail',
                error: 'user not found',
            })
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (isCorrect) {
            // request.session.user = user;
            response.status(200).json({
                status: 'success',
            })
        } else {
            response.status(400).json({
                status: 'fail',
                error: 'incorrect username or password',
            })
        }
    } catch (error) {
        response.status(400).json({
            status: 'fail',
            error: error.message,
        })
    }
};