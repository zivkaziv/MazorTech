/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
import Post from '../models/post';

export function getMedicalRights(req, res) {
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
    let rights = [];
    rights.push(right1,right2);
    if (false) {
      res.status(500).send(err);
    }
    res.json({ rights });
}
