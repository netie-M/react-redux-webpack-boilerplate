import express from 'express';
import {loadUser , loadAllUser , insertUser, updateUser, deleteUser} from './user.controller';

const router = express.Router();

router.get('/', loadAllUser);
router.get('/:id', loadUser);
router.post('/', insertUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
