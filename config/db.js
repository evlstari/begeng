// Export mongoose
const mongoose = require("mongoose");

//Mendefinisikan url database MongoDB
var uri = "mongodb+srv://usertest:usertest12345@begengdb.yzabouv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// cek koneksi
mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection success!");
  },
  (err) => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  }
);
