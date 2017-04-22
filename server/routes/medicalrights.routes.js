/**
 * Created by ziv on 22/04/2017.
 */
import { Router } from 'express';
import * as MedicalRightsController from '../controllers/medicalrights.controller';
const router = new Router();

// Get all rights
router.route('/medicalrights').get(MedicalRightsController.getMedicalRights);


export default router;
