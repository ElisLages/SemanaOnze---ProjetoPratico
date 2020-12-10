const { fstat } = require("fs")
const series = require("../model/series.json")
const fs = require("fs")

const getAllSeries = (req, res) => {
    console.log(req.url)
    res.status(200).send(series)
}
//Rota de Post
const createSeries = (req, res) => {
    const { id, title, genre, year, seasons, watched } = req.body
    series.push({ id, title, genre, year, seasons, watched })
    fs.writeFile("./src/model/series.json", JSON.stringify(series), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("A série foi registrada no arquivo, com sucesso!")
            const seriesFound = series.find(serie => serie.id == id)
            res.status(200).send(seriesFound)
        }
    })
}

const getById = (req, res) => {
    const seriesId = req.params.id
    const seriesFound = series.find(serie => serie.id == seriesId)
    if (seriesFound) {
        res.status(200).send(seriesFound)
    } else {
        res.status(404).send({ message: "Série não encontrada!"})
    }
}

const updateSeries = (req, res) => {
  const seriesId = req.params.id
  const seriesToUpdate = req.body

  const seriesFound = series.find(serie => serie.id == seriesId) 
  const serieIndex = series.indexOf(seriesFound)
}
 


module.exports = {
    getAllSeries,
    createSeries,
    getById,
    updateSeries

}