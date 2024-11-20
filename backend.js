// Import required modules
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/loginDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));

// Create a User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Ideally, passwords should be hashed
  createdAt: { type: Date, default: Date.now },
});

// Create a User Model
const User = mongoose.model("User", userSchema);

// Function to save user login data
const saveLoginData = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
  } catch (err) {
    console.error("Error saving user:", err);
  }
};

// Example user data
const exampleUser = {
  username: "PradumanKumar",
  email: "pradumankumar4255@gmail.com",
  password: "securePassword123", // Replace this with a hashed password in real use cases
};

// Save the example user to the database
saveLoginData(exampleUser);
