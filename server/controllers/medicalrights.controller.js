import MedicalEntry from '../models/medicalEntry';

export function getMedicalRights(req, res) {
  MedicalEntry.findOne(req.params).exec((err, medicalEntry) => {
      if (err) {
        res.status(500).send(err);
      }if(medicalEntry){
        res.json({ medicalEntry });
      }else{
        res.json({ medicalEntry : [] });
      }
  });
}

export function getAllConditions(req, res) {
   MedicalEntry.find({}).select({ "condition": 1, "_id": 0}).exec((err, medicalEntry) => {
        if (err) {
          res.status(500).send(err);
        }
        if(medicalEntry){
          res.json({ medicalEntry });
        }else{
          res.json({ medicalEntry : [] });
        }
    });
}
