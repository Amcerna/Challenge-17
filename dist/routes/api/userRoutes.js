import { Router } from 'express';
import { getAllUser, createUser, updateUser, deleteUser, getSingleUser } from '../../controllers/userController.js';
const router = Router();
// all of these routes are prefixed with '/api/users' --> because of the redirect.
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser).get(getSingleUser);
export { router as userRoutes };
