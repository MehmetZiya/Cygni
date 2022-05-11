import express from 'express'

const router = express.Router()

import { getImages } from '../controllers/imageControllers.js'

router.get('/:tag/:page', getImages)

export default router
