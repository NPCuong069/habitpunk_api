const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const userRoutes = require('./api/userApi');
const app = express();
const cors = require('cors');

// Load Swagger document as a JS object
const swaggerDocument = YAML.load('./src/swagger.yaml'); // Make sure the path is correct

app.use(express.json());
app.use(cors({
  origin: '*'  // This allows all domains, adjust as necessary for production
}));
// Set up Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use user routes
app.use('/api',userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available on http://localhost:${PORT}/api-docs`);
});
