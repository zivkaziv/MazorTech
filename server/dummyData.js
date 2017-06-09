import MedicalEntry from './models/medicalEntry';

export default function () {
  MedicalEntry.count().exec((err, count) => {
    if (count > 0) {
      return;
    }


  let dummyRights = {
    "Medical_Condition" : "OSA1",
    "rights":[
      {
        "Medical_Right": "hopa",
        "Medical_Right_Description": "Bla",
        "description": "CPAP (continuous positive airway pressure)",
        "filters":[
          {
            "name":"Age",
            "filter_type":"date",
            "min":10,
            "max":30
          },
          {
            "name":"Weight",
            "filter_type":"range",
            "min":10,
            "max":30
          },
          {
            "name":"Smoking",
            "filter_type":"boolean",
            "value":false
          },
          {
            "name":"Family_Background",
            "filter_type":"boolean",
            "value":true
          }
        ]
      }
    ]
};

    const me1 = new MedicalEntry({condition: 'OSA1', rights: dummyRights});

    MedicalEntry.create([me1], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
