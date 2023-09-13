const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/config');
const companyRoutes = require('./routes/companies');
const certificateRoutes = require('./routes/certificates');
const balanceRoutes = require('./routes/balances');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(bodyParser.json());
app.use('/companies', companyRoutes);
app.use('/certificates', certificateRoutes);
app.use('/balances', balanceRoutes);

app.use(errorMiddleware.handleErrors);

const PORT = process.env.PORT || 3000;

db.sync() // Sincronizar com o banco de dados
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });
