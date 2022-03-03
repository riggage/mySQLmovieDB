const Moive = require("./movieTable")
const Movie = require("./movieTable")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async (filterObj) => {
    console.log("filterObj: ", filterObj);
    try {
        if (filterObj.undefined === undefined) {
            return await Movie.findAll();
        } else {
            return await Movie.findOne({where: filterObj});
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovies = async (updateObj) => {
    try {
        if (updateObj) {
            return await Moive.updateOne({where: updateObj})
        } else {
            return await Moive.updateAll()
        }
    } catch (error) {
        console.log(error)
    }
}