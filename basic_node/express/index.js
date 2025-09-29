const express = require("express");
const { connectDB } = require("./config/db");
const User = require("./models/userModel");
const { UniqueConstraintError, ValidationError } = require("sequelize");
// const router = require("./routes/customerRoutes");
const app = express();
const port = 3000;
const host = "localhost";

connectDB();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use((err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res.status(400).json({
      success: false,
      message: "Duplicate entry",
      errors: err.errors.map((e) => e.message),
    });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      message: "Data Input is invalid and Validation error",
      errors: err.errors.map((e) => e.message),
    });
  }

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : null,
  });
});

// app.use("/customers", router);
// // small middleware to log request details
// const logger = (req, res, next) => {
//   console.log([new Date().toISOString(), req.method, req.url].join(" - "));
//   next();
// };
// app.set("view engine", "ejs");
// app.set("views", "./views");
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
// app.use(logger);

// // route handlers

// app.get("/", (req, res) => {
//     const userData = {
//       title: "User List",
//       users: [
//         { name: "Ravi", city: "Delhi" },
//         { name: "Priya", city: "Mumbai" },
//         { name: "Karan", city: "Bangalore" },
//       ],
//     };
//   res.render("index.ejs",
//     {
//         title: "Home Page",
//         text: "Hello World from EJS template!",
//         userData: userData
//     });
// });

// app.get("/products", (req, res) => {
//   const cat = req.query.cat;
//   const sort = req.query.sort;
//   const limit = req.query.limit;
//   const products = [
//     { id: 1, name: "Product A", category: "electronics", price: 100 },
//     { id: 2, name: "Product B", category: "clothing", price: 50 },
//     { id: 3, name: "Product C", category: "electronics", price: 150 },
//     { id: 4, name: "Product D", category: "clothing", price: 80 },
//   ];
//   let filteredProducts = products;
//   if (cat) {
//     filteredProducts = filteredProducts.filter((p) => p.category === cat);
//   }
//   if (sort) {
//     const [key, order] = sort.split("_");
//     filteredProducts = filteredProducts.sort((a, b) => {
//       if (order === "asc") return a[key] - b[key];
//       else return b[key] - a[key];
//     });
//   }
//   if (limit) {
//     filteredProducts = filteredProducts.slice(0, parseInt(limit));
//   }
//   res.header("Content-Type", "application/json");
//   res.send(JSON.stringify(filteredProducts));
// });

// app.get('/broken-route',(req,res,next) => {
//     const error = new Error("Something went wrong!");
//     error.status = 500;
//     next(error);
// });

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
