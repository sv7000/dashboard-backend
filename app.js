const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const sectionRoutes = require('./routes/sectionRoutes');

const app = express();



app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', sectionRoutes);


//Here I am dropping all the tables with force: true
sequelize.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});

//This will not drop the tables
// sequelize.sync().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
//   });
// });
