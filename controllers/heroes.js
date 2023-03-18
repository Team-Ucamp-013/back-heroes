const HeroModel = require('../models/heroes')

const getHeroes = async () => {
  console.log(HeroModel)
  const heroes = await HeroModel.find({})
  console.log('===>', heroes)
  return heroes
}

const getHeroById = async (_id) => {
  return HeroModel.findOne({ _id })
}

const createHero = async (body) => {
  const newHero = new HeroModel(body)
  await newHero.save()
  return newHero
}

const updateHero = async (_id, updateObject) => {
  return HeroModel.findOneAndUpdate({ _id }, updateObject, {
    upsert: false,
    new: true
  })
}

const removeHero = async (_id) => {
  return HeroModel.findOneAndDelete({ _id })
}


module.exports = {
  getHeroes,
  getHeroById,
  createHero,
  updateHero,
  removeHero
}