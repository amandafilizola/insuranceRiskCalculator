/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import { Router } from 'express';
import * as risk_controller from './controller';
const router = Router();

router.get('/risk', risk_controller.index);

export default router;