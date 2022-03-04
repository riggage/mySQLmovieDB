const Movie = require("./movieTable")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async (filterObj) => {
    // console.log("filterObj: ", filterObj);
    try {
        if (filterObj.title || filterObj.actor) {
            // return await Movie.findOne({where: filterObj});
            return await Movie.findAll({where: filterObj});

        } else {
            return await Movie.findAll();
        }
        
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (param, filterObj, update) =>{
    try {
        if (param === "title"){
        await Movie.update({title: update}, {where: {title: filterObj}})
        } else if (param === "actor") {
            const test =  await Movie.update({actor: update}, {where: {actor: filterObj}})
            console.log(test)
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (deleteObj) => {
    try {
        if (deleteObj.title || deleteObj.actor) {
            return await Movie.destroy({where: deleteObj})
        } else {
            console.log("Cannot find an entry with that name")
        }
    } catch (error) {
        console.log(error)
    }
}