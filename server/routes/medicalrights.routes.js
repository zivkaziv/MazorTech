/**
 * Created by ziv on 22/04/2017.
 */
import { Router } from 'express';
import * as MedicalRightsController from '../controllers/medicalrights.controller';
const router = new Router();

// Get all conditions
router.route('/medicalConditions').get(MedicalRightsController.getAllConditions);

// Get all rights
router.route('/medicalright').get(MedicalRightsController.getMedicalRight);
router.route('/medicalrights').get(MedicalRightsController.getMedicalRights);
router.route('/medicalrightsmock').get(MedicalRightsController.getMedicalRightsMock);

// Get one post by cuid
router.route('/medicalrights/:condition').get(MedicalRightsController.getMedicalRights);

export default router;
