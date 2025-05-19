import { Request, Response } from 'express';
import { Thought, User }from '../models/index.js';

export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const getSingleThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.id });
    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }
    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );
    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }
    return res.json(thought);
    }
  catch (err) { 
    console.error(err);
    return res.status(500).json(err);
  }
};
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.id });
    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }
    return res.json({ message: 'Thought successfully deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }
    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }
    return res.json(thought);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
}