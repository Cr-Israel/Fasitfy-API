let heroes = require('../db/Heroes');
const { v4: uuidv4 } = require('uuid');

const createHero = (req, reply) => {
    const { name } = req.body;

    const hero = {
        id: uuidv4(),
        name,
    };

    try {
        heroes = [...heroes, hero];
    } catch (err) {
        return reply.code(500).send(console.error('Deu erro aqui, na adição de um hero: ' + err));
    };

    reply.code(201).send(hero);
};

const getAllHeroes = (req, reply) => {
    reply.send(heroes);
};

const getHeroById = (req, reply) => {
    const { id } = req.params;

    hero = heroes.find((hero) => hero.id == id);

    reply.send(hero);
};

const updateHeroById = (req, reply) => {
    const { id } = req.params;
    const { name } = req.body;

    heroes = heroes.map((hero) => (hero.id === id ? { id, name } : hero));
    hero = heroes.find((hero) => hero.id === id);

    reply.send(hero);
};

const updateHeroByName = (req, reply) => {
    const { name } = req.params;

    heroes = heroes.map((hero) => (hero.name === name ? { name, name } : hero));
    hero = heroes.find((hero) => hero.name === name);

    reply.send(hero);
}

const deleteHero = (req, reply) => {
    const { id } = req.params;

    heroes = heroes.filter((hero) => hero.id !== id);

    reply.send({ message: `Hero ${id} foi removido com sucesso!` });
};

module.exports = {
    getAllHeroes,
    createHero,
    getHeroById,
    updateHeroById,
    updateHeroByName,
    deleteHero,
};