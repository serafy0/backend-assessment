const Restaurant = require("../models/restaurant");
const json = require("../data.json");
let newJSONArray = [];
const populateDB = async () => {
  const restraunt = await Restaurant.find();
  if (Array.isArray(restraunt) && restraunt.length < 1) {
    for (let item of json) {
      let newObject = {};
      newObject._id = item._id.$oid;
      newObject.address = item.address;
      newObject.cuisine = item.cuisine;
      let newGradesArray = [];
      for (let oneGrade of item.grades) {
        newGradesArray.push({
          date: oneGrade.date.$date,
          grade: oneGrade.grade,
          score: oneGrade.score,
        });
      }
      newObject.grades = newGradesArray;
      newObject.name = item.name;
      newObject.restaurant_id = item.restaurant_id;
      newJSONArray.push(newObject);
    }
    await Restaurant.insertMany(newJSONArray);
  }
};

module.exports = populateDB;
