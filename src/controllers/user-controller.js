import User from "../models/user.js";

export async function handleUserSingup(req, res) {
    const {name, email, password} = req.body;
    const user = await User.create({name, email, password});
    return res.redirect('/')
}


export async function handleUserSingin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(!user) {
        return res.render('login', {error: 'email or password is wrong'});
    }
    return res.redirect('/');
}