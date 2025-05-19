import { Request, Response } from 'express';
import { User }from '../models/index.js';

export const getAllUser = async (_req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }
    return res.json(user);
    } catch (err) { 
      console.error(err);
      return res.status(500).json(err);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'No user with this id!' });
    }
    return res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
};