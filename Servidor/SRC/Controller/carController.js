const Car = require('../Models/carModel')
const Record=require('../Models/recordModel')

exports.create = async (req, res) => {
    const plate = req.body.plate;
    const brand = req.body.brand;
    const model = req.body.model;
    try {
      const car = await Car.create({
        plate:plate,
        brand:brand,
        model:model
      });
      res.status(201).json(car);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  
  exports.update = async (req, res) => {
    const { carId } = req.params;
    const newUpdate = req.body;
    try {
      const car = await Car.findByIdAndUpdate(carId, newUpdate);
      res.status(200).json('Actualizado Exitosamente');
    } catch (err) {
      res.status(500).json(err);
    }
  };

 exports.delete = async (req, res) => {
    const  {carId}  = req.params;
    try {
      const result = await Record.deleteMany({ car: carId }); 
      const car = await Car.findByIdAndRemove(carId);
      res.status(200).json('Eliminado Exitosamente');
    } catch (err) {
      res.status(500).json(err);
    }
  };

  exports.getAll = async (req, res) => {
    try {
      const cars = await Car.find();
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  exports.getById = async (req, res) => {
    const { carId } = req.params
    try {
      const car = await Car.findOne({_id:carId});
      res.status(200).json(car);
    } catch (err) {
      res.status(500).json(err);
    }
  };