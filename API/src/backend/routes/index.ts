import express from 'express'
import { getStatus } from './status/get.status'
//import { getAllDataStars } from './stars/get.alldatastars'
import { getDataSelectedStar } from './stars/get.dataSelectedStar'
import { AddStar } from './stars/post.AddStar'
import { AddConstellation } from './stars/post.AddConstellation'
import { getAllDataStars } from './stars/get.AllDataStars'
import { getAllDataConstellations } from './stars/get.AllDataConstellations'

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

// api route
router.get('/api/stars/:name', getDataSelectedStar)

//router.get('/api/stars/getalldatastars', getAllDataStars)

router.post('/api/stars/addStar', AddStar)

router.post('/api/stars/addConstellation', AddConstellation)

router.get('/api/stars/getDataSelectedStar/', getDataSelectedStar)

router.get('/api/stars/getAllDataStars', getAllDataStars)

router.get('/api/stars/getAllDataConstellations', getAllDataConstellations)

export default router
