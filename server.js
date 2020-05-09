const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./utils/db");
dotenv.config({ path: "./.env" });

// 0) HANDLE UNCAUGHT EXCEPTION

// 1) CONNECT DATABASE
connectDB();
// 2) SETTING PORT AND LISTEN SEVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(
        'Connected to MongoDB Server, WebService running on port '+PORT
    );
});

// 3) HANDLE UNHANDLED REJECTION!
