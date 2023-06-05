const {
    getAllHeroes,
    createHero,
    getHeroById,
    deleteHero,
    updateHeroById,
    updateHeroByName

} = require('../controllers/HeroesController');

// Schema
const Hero = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
    },
};

const addHeroOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' },
            },
        },
        response: {
            201: Hero,
        },
    },
    handler: createHero,
};

const getAllHeroesOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                heroes: Hero
            },
        },
    },
    handler: getAllHeroes,
};

const getHeroByIdOpts = {
    schema: {
        response: {
            200: Hero,
        },
    },
    handler: getHeroById,
};

const updateHeroByIdOpts = {
    schema: {
        response: {
            200: Hero,
        },
    },
    handler: updateHeroById,
};

const updateHeroByNameOpts = {
    schema: {
        response: {
            200: Hero,
        },
    },
    handler: updateHeroByName,
};

const deleteHeroOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                },
            },
        },
    },
    handler: deleteHero,
};

function heroesRoutes(server, opts, done) {
    // Post a New Hero
    server.post('/', addHeroOpts);

    // Get All Heroes
    server.get('/', getAllHeroesOpts);

    // Get a Single Hero
    server.get('/:id', getHeroByIdOpts);

    // Update a Hero By ID
    server.put('/update/:id', updateHeroByIdOpts);

    // Update a Hero By Name
    server.put('/update/name/:name', updateHeroByNameOpts);

    // Delete a Hero
    server.delete('/delete/:id', deleteHeroOpts);

    done();
};

module.exports = heroesRoutes;