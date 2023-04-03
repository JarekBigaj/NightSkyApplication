import express from 'express'
import { getStatus } from './status/get.status'
import { getStars } from './stars/get.stars'
const router = express.Router()
// middleware
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
next() })
// home page route
router.get('/', (req, res) => {
    res.send('Example home page')
})
// api route
router.get('/api/status', getStatus)

// api stars
router.get('/api/stars', getStars)
export default router



