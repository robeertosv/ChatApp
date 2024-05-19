import jwt from 'jsonwebtoken';

const generateTokenAndCookie = async (userId, res) => {
    const token = jwt.sign({userId}, process.env.API_KEY, { expiresIn: '30d' })

    res.cookie("sessionToken", token, {
        maxAge: 30 * 24 * 3600 * 1000,
        sameSite: "strict",
        httpOnly: true
    })
}

export default generateTokenAndCookie;