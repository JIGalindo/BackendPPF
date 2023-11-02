const Record = require('../Models/recordModel')

exports.create = async (req, res) => {
    const  car  = req.params.id;
    const driver = req.body.driver;
    const mileage=req.body.mileage;
    const description=req.body.description;
    try {
      const record = await Record.create({
        car:car,
        driver: driver,
        mileage:mileage,
        description:description,
      });
      res.status(201).json(record);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  exports.getAll = async (req, res) => {
    try {
      const records = await Record.find();
      res.status(200).json(records);
    } catch (err) {
      res.status(500).json(err);
    }
  };