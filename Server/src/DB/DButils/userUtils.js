import UserModel from '../schemas/userModel.js'; 

export const addUser = async (userData) => {
    try {
        const newUser = new UserModel(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error(`Error adding user: ${error.message}`);
    }
};

export const removeUser = async (userId) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error) {
        throw new Error(`Error removing user: ${error.message}`);
    }
};

export const updateUser = async (userId, updateData) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`);
    }
};

export const getUserByEmail = async (email) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`);
    }
};
