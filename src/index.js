const express = require("express");
const cors = require("cors");
const { connect } = require("./configs/db");

const { data } = require("./configs/data");

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/movies", (req, res) => res.send(data()));

app.listen(port, async () => {
	try {
		await connect();

		console.log(`DB connected and port ${port}`);
	} catch (error) {
		console.log(error);
	}
});
