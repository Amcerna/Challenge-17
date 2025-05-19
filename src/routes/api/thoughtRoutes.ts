import { Router } from 'express';
import { getAllThoughts, createThought, updateThought, deleteThought, getSingleThought, addReaction, removeReaction } from '../../controllers/thoughtController.js';
const router = Router();

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').put(updateThought).delete(deleteThought).get(getSingleThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

export { router as thoughtRoutes };