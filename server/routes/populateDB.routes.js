import { Router } from 'express';
import * as PopulateDBController from '../controllers/populateDB.controller';
const router = new Router();

// Get all rights from DB and save to DB
router.route('/populateDB').get(PopulateDBController.populateDB);


export default router;
