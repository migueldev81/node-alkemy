import { User } from '../models/User.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
    const { username, password, email, role } = req.body;
    try {
        let newUser = await User.create(
            {
                username,
                password: CryptoJS.AES.encrypt(
                    password,
                    process.env.PASS_SEC
                ).toString(),
                email,
                role

            },
            {
                fields: ["username", "password", "email", "role"],
            }
        );
        return res.json(newUser);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        }

        );
        res.json(user)
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        originalPassword != inputPassword &&
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });

    } catch (err) {
        res.status(500).json(err);
    }

};