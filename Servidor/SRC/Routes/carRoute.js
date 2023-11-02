const router = require('express').Router()
const carController = require('../Controller/carController')

router.post(
  '/car',
  carController.create
)

router.put(
  '/car/update/:carId',
  carController.update
)

router.delete(
  '/car/delete/:carId',
  carController.delete
)

router.get(
  '/car/getall',
  carController.getAll
)
router.get(
  '/car/getone/:carId',
  carController.getById
)
module.exports = router