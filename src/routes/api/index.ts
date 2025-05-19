import { Router } from 'express';
import { userRoutes } from './userRoutes.js';
import { thoughtRoutes } from './thoughtRoutes.js';
const router = Router();

// all of these routess are prefixed with '/api' --> becuase of the redirect.
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;