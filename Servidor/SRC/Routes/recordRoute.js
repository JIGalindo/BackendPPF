const router = require('express').Router()
const recordController = require('../Controller/recordController')

router.post(
  '/recordcreate/:id',
  recordController.create
)
router.get(
  '/record/getall',
  recordController.getAll
)

module.exports = router