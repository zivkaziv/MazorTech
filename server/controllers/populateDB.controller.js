import MedicalEntry from '../models/medicalEntry';

export function populateDB(req, res) {
  var csv = require("fast-csv");
  var hashMap = require('hashmap');
  var map = new hashMap();
  var medRightArr = [];

  csv
   .fromPath("C:\\mp2.csv", {headers: true})
   .on("data", function(data){
       //data is now a JSON object whereas CSV header is the parameter name, and the row is the value.
       var med_con = data["Medical Condition"];
       delete data["Medical Condition"];

       //Manage hashmap of array values (to consolidate similar keys)
       if (!map.has(med_con)){
          var arr = [];
          map.set(med_con, arr);
       }

        for(var key in data){
            if (!data[key]){
                delete data[key];
            }
            else if (data.Age){
                var rangeStr = data.Age + "";
                var range = rangeStr.split(";");
                var age = {};
                for (var index = 0; index < range.length; index++) {
                  console.log("str: " + rangeStr);
                  var sign = range[index].substring(0, 1);
                  if (sign === "<"){
                    age.max = range[index].substring(1);
                    data.Age = age;
                  }
                  if (sign === ">"){
                    age.min = range[index].substring(1);
                    data.Age = age;
                  }
                }
            }
        }

       map.get(med_con).push(data);
   })
   .on("end", function(){

      //value in the first parameter, confusing, isn't it?
      map.forEach(function(value, key) {
            const me = new MedicalEntry({condition: key, rights: value});
            medRightArr.push(me);
      });


      //Create all DB rows at one shot
      if (typeof medRightArr !== 'undefined' && medRightArr.length > 0) {
        MedicalEntry.create(medRightArr, (error) => {
            if (error){
                    console.log("An Error took place upon saving to DB" + error);
            }
        });
      }else{
        console.log("No Entry was updated in the DB");
      }
   });
   console.log("DB update finished!");
   let rights = [];
   res.json({ rights });
 }
