// import express from "express";

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello Welcome to the express server!");
// });

// app.get("/search", (req, res) => {
//   const { item, age, vill } = req.query;
//   res.send(`You searched for ${item}, age: ${age} and village is ${vill}`);
// });

// app.post('/users', (req, res) => {
//     const { name, age, vill } = req.body; 
//     res.send(`User created with name: ${name}, age: ${age} and village is ${vill}`);
// })

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


import express from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];

app.get("/", (req, res) => {
  res.send("Hello Welcome to the express server!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/create-user", (req, res) => {
   const {name, age} = req.body;
   const newUser = { id: users.length + 1, name, age };
   users.push(newUser);
   res.status(201).json({
    message: "User created successfully",
    data: newUser
   });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params; 
  const updatedUser = req.body;

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = { id: parseInt(id), ...updatedUser };
  res.status(200).json({
    message: "User updated successfully",
    data: users[userIndex],
  });
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params; 
  const updatedUser = req.body;

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.status(200).json({
    message: "User updated successfully",
    data: users[userIndex],
  });
});
 

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;  

  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.status(200).json({
    message: "User delete successfully", 
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});