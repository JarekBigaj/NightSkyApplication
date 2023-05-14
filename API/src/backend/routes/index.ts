import express from 'express'
import { getStatus } from './status/get.status'
import { AddStar } from './stars/post.AddStar'
import { AddConstellation } from './constellations/post.AddConstellation'
import { getAllDataStars } from './stars/get.AllDataStars'
import { getAllDataConstellations } from './constellations/get.AllDataConstellations'
import { getDataSelectedStar } from './stars/get.dataSelectedStar'
import { getDataSelectedConstellation } from './constellations/get.dataSelectedConstellation'
import { EditSelectedStar} from './stars/put.EditSelectedStar'
import { EditSelectedConstellations} from './constellations/put.EditSelectedConstellations'
import { DeleteSelectedStar } from './stars/delete.deleteSelectedStar'
import { DeleteSelectedConstellation } from './constellations/delete.DataSelectedConstellation'

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

router.post('/api/stars/addStar', AddStar)

router.post('/api/stars/addConstellation', AddConstellation)

router.get('/api/stars/getDataSelectedStar/', getDataSelectedStar)

router.get('/api/constellations/getDataSelectedConstellation/', getDataSelectedConstellation)

router.get('/api/stars/getAllDataStars', getAllDataStars)

router.get('/api/constellations/getAllDataConstellations', getAllDataConstellations)

router.put('/api/stars/EditSelectedStar', EditSelectedStar )

router.delete('/api/stars/DeleteSelectedStar', DeleteSelectedStar )

router.delete('/api/stars/DeleteSelectedConstellation', DeleteSelectedConstellation )
export default router
