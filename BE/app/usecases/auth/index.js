const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
    createUser,
    getUserByEmail,
    getUserByPhoneNumber,
} = require("../../repositories/user");

const { v4: uuidv4 } = require("uuid");

const { createToken } = require("../../helpers/createToken");

exports.register = async (payload) => {
    const existingEmail = await getUserByEmail(payload.email);
    const existingPhoneNumber = await getUserByPhoneNumber(payload.phoneNumber);

    if (existingEmail) {
        throw { statusCode: 400, message: "Email already registered" };
    }
    if (existingPhoneNumber) {
        throw { statusCode: 400, message: "Phone Number already registered" };
    }

    const user = await createUser(payload);

    delete user?.dataValues?.password;

    const data = createToken(user);

    return data;
};

exports.login = async (email, password) => {
    // get the user
    let user = await getUserByEmail(email);
    if (!user) {
        throw { statusCode: 400, message: "User is not found!" };
    }
    // compare the password
    const isValid = await bcrypt.compare(password, user?.password);
    if (!isValid) {
        throw { statusCode: 400, message: "Wrong Password" };
    }

    // delete password
    if (user?.dataValues?.password) {
        delete user?.dataValues?.password;
    } else {
        delete user?.password;
    }

    // Create token
    const jwtPayload = {
        id: user.id,
    };

    const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    // return the user data and the token
    const data = {
        user,
        token,
    };

    return data;
};

