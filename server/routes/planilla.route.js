import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import planCtrl from '../controllers/planilla.controller';
import turnoCtrl from '../controllers/turno.controller';

const router = express.Router();

router.route('/')
  /** GET /api/posts - Get list of posts */
  .get(planCtrl.list)

  /** POST /api/posts - Create new post */
  .post(validate(paramValidation.createPost), planCtrl.create);

router.route('/:planId')
  /** GET /api/post/:postId - Get post */
  .get(planCtrl.get)

  /** PUT /api/posts/:postId - Update post */
  .put(validate(paramValidation.updatePost), planCtrl.update)

  /** DELETE /api/posts/:postId - Delete post */
  .delete(planCtrl.remove);

/** Load post when API with postId route parameter is hit */
router.param('planId', planCtrl.load);

export default router;
