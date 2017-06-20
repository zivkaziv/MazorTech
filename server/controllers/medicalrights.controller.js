import MedicalEntry from '../models/medicalEntry';

let right1 = {
  "condition":"OSA",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right2 = {
  "condition":"OSA1",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right3 = {
  "condition":"OSA2",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right4 = {
  "condition":"OSA3",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right5 = {
  "condition":"OSA4",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right6 = {
  "condition":"OSA5",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right7 = {
  "condition":"OSA6",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right8 = {
  "condition":"OSA7",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};
let right9 = {
  "condition":"OSA8",
  "rights":[
    {
      "name": "CPAP (continuous positive airway pressure)",
      "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
      "family_history": "",
      "general_condition":"",
      "filters":[
        {
          "name":"age",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"weight",
          "is_relevant":true,
          "min":10,
          "max":30
        },
        {
          "name":"race",
          "is_relevant":true,
          "value":"black"
        },
        {
          "name":"smoking",
          "is_relevant":true,
          "value":false
        }
      ]
    }
  ]
};



let medicalEntry = [];
medicalEntry.push(right1,right2,right3,right4,right5,right6,right7,right8,right9);

export function getMedicalRights(req, res) {
  MedicalEntry.find({}).exec((err, medicalEntry) => {
      if (err) {
        res.status(500).send(err);
      }if(medicalEntry){
        res.json({ medicalEntry });
      }else{
        res.json({ medicalEntry : [] });
      }
  });
}

export function getMedicalRight(req, res) {
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

export function getMedicalRightsMock(req, res) {
  res.json({ medicalEntry });
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
