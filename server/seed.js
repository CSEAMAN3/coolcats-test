const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    color: "grey and white",
    hasClaws: true,
  });
  await Cat.create({
    name: "Cedric",
    color: "ginger",
    hasClaws: false,
  });
  console.log("Go Kitty Go");
  mongoose.disconnect();
}

seed();

//

// mongoose.connect(process.env.MONGO_URL, options, (err) => {
//   if (err) console.log(err);
//   else console.log("mongdb is connected");
// });

// or

// mongoose
//   .connect(process.env.MONGO_URL, options)
//   .then(() => console.log("connected"))
//   .catch((e) => console.log(e));
