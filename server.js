const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Define a GET route for '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjust path if needed
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}