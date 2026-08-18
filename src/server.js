const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

// Health check - REQUIRED
app.get("/health", (req, res) => res.json({ status: "OK", version: "1.0.0" }));

// Routes
app.use("/api/v1/tasks", taskRoutes);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));