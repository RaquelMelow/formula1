import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener usuarios', error });
    }
};

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send({ message: 'Error al crear usuario', error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(400).send({ message: 'Error al actualizar usuario', error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send({ message: 'Usuario no encontrado' });
        res.status(204).send();
    } catch (error) {
        res.status(400).send({ message: 'Error al eliminar usuario', error });
    }
};
