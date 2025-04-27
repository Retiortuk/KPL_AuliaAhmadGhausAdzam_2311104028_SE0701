// Import express dan swagger
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000; 

// Supaya bisa parsing JSON body
app.use(express.json());

// Static list of Mahasiswa
let mahasiswaList = [
  { name: 'Aulia Ahmad Ghaus Adzam', nim: '2311104028', course: ['Software Engineer', 'API Developer'], year: 2023 },
  { name: 'Ghaza Zidane Nurraihan', nim: '2311104038', course: ['Designer', 'UI/UX'], year: 2023 },
  { name: 'Satria Ramadan', nim: '23111040', course: ['Web Dev', 'Cyber Security'], year: 2023 },
  { name: 'Kelvin Ferdinand', nim: '23111040', course: ['Backend Development', 'DevOps'], year: 2023 },
  { name: 'Kevin Jonson', nim: '23111040', course: ['Frontend Development', 'UI/UX'], year: 2023 }
];

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mahasiswa API',
      version: '1.0.0',
      description: 'Simple API for managing Mahasiswa',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./index.js'], // File untuk membaca anotasi Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Mahasiswa:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nim:
 *           type: string
 *         course:
 *           type: array
 *           items:
 *             type: string
 *         year:
 *           type: integer
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Get all mahasiswa
 *     responses:
 *       200:
 *         description: List of mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 *
 *   post:
 *     summary: Add a new mahasiswa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       201:
 *         description: Mahasiswa added
 *
 * /api/mahasiswa/{id}:
 *   get:
 *     summary: Get a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa not found
 *
 *   delete:
 *     summary: Delete a mahasiswa by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of mahasiswa
 *     responses:
 *       200:
 *         description: Mahasiswa deleted
 *       404:
 *         description: Mahasiswa not found
 */

// GET /api/mahasiswa - Ambil semua mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

// GET /api/mahasiswa/:id - Ambil mahasiswa berdasarkan index
app.get('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

// POST /api/mahasiswa - Tambah mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const newMahasiswa = req.body;
  mahasiswaList.push(newMahasiswa);
  res.status(201).send('Mahasiswa added');
});

// DELETE /api/mahasiswa/:id - Hapus mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    mahasiswaList.splice(id, 1);
    res.send('Mahasiswa deleted');
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

// Run server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});
