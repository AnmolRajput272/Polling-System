const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require("./models/sequelize");
const questionRoutes = require("./routes/questionRoutes");
const optionRoutes = require("./routes/optionRoutes");
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/questions',questionRoutes);
app.use('/options',optionRoutes);

(async () => {
  await sequelize.sync(); // Creates tables if they don't exist
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});