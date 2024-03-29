const { Router, response } = require('express');
const axios = require ('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Diet, Recipe} = require ('../db');
const db = require('../db');
const { END_POINT, API_KEY } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const apiInfo = async () =>{
    let apiMap = [];
    await axios(`${END_POINT}&apiKey=${API_KEY}`)
    .then(response => response.data)
    .then(data => apiMap = data.results.map(e => {
        let {id, title, summary, healthScore, steps, image, diets} = e
        return {
            id,
            nombre : title,
            resumen : summary,
            nivel : healthScore,
            pasos : steps,
            dietas : diets,
            image: image,
}
}))
return apiMap;
}

const dbInfo = async () => {
    return await Recipe.findAll({
        include:{
            model: Diet,
            atributes: ['nombre'],
            through: {
                atributes: [],
            }
        }
    })
}

const todasLasrecetas = async () => {
    const api = await apiInfo();
    const baseDeDatos = await dbInfo();
    const infoTotal = api.concat(baseDeDatos);
    return infoTotal;
}


router.get('/recipes', async (req, res) => {
    const recetas = await todasLasrecetas();
    try {
        if(req.query.name){
            let filtradas = await recetas.filter( e => e.nombre.toLowerCase().includes (req.query.name.toLowerCase()));
            filtradas.length ?
            res.status(200).send(filtradas) :
            res.status(400).send('no existe la receta');
        }else{
            res.status(200).send(recetas);}
    } catch (error) {
        throw error
    }
});

router.get('/recipes/:id', async (req, res) =>{
    const recetas = await todasLasrecetas();
    if(req.params.id){
        let recetasPorId = await recetas.filter(e => parseInt(e.id) === parseInt(req.params.id));
        recetasPorId.length ?
            res.status(200).send(recetasPorId) :
            res.status(400).send('no existe la receta');
    }
});

router.get('/recipes/type/:id', async (req, res) => {
    let recetas = await getAllBreeds();
    let tipoDeReceta = req.params.id;
    if(req.params.id){
        let filtrados = await recetas.filter(e => {
            if(e.temperament !== undefined){
                if(e.temperament.indexOf(tipoDeReceta)>0)
            return e.temperament}
        });
        filtrados?
        res.status(200).send(filtrados) :
        res.status(400).send('no se encontraron recetas');
    }
});

router.get('/types', async (req, res) => {
    let dietas = [];
    await axios(`${END_POINT}&apiKey=${API_KEY}`)
    .then(response => response.data)
    .then(data => apiMap = data.results.map(e => {
        let {diets} = e
        diets.map(e => dietas.push(e))
    }))
    const dataArr = new Set(dietas);
    let result = [...dataArr];
    result.forEach(e => {
        Diet.findOrCreate({
            where: { nombre: e}
        })
    })
    const todasLasDietas = await Diet.findAll();
    res.send(todasLasDietas);
});

router.post('/recipe', async (req, res) =>{
    let {id, title, summary, spoonacularScore, healthScore, steps, diets} = req.body

    let recetaCreada = await Recipe.create({
        id: Math.floor((Math.random() * (999 - 1 + 1)) + 1),
        nombre : title,
        resumen : summary,
        nivel : healthScore,
        puntuacion: spoonacularScore,
        pasos : steps,
        dietas :diets,
        image : "https://png.pngtree.com/element_our/png_detail/20181102/hearty-cartoon-korean-food-png_220551.jpg",
        createdInDb: true
    });

    let dietasDeBd = await Diet.findAll({
        where: { nombre : diets}
    });
    recetaCreada.addDiet(dietasDeBd);
    res.send('Receta Creada con exito')
    console.log(recetaCreada, dietasDeBd)
});

module.exports = router;
