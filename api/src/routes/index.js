const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./recipes.js');
const dietsRouter = require('./diets.js');
const homeRouter = require('./home.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouter)
router.use('/diets', dietsRouter)
router.use('/home', homeRouter)

module.exports = router;
