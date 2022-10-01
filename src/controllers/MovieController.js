import { Movie, MovieCharacter } from '../models/Movie.js'
export async function getMovies(req, res) {
    try {
        //MovieByTitle
        if (req.query.title) {
            const movieTitle = await Movie.findOne({
                where: {
                    title: req.query.title
                }
            })
            res.json(movieTitle)
            //MoviesByGender
        } else if (req.query.genre) {
            const movieGender = await Movie.findAll({
                where: {
                    genderId: req.query.genre
                }
            })
            res.json(movieGender)
            //MoviesOrderASC
        } else if (req.query.order === "ASC") {
            const movieASC = await Movie.findAll({
                order: [['creation', 'ASC']]
            })
            res.json(movieASC)
            //MoviesOrderDESC
        } else if (req.query.order === "ASC") {
            const movieDESC = await Movie.findAll({
                order: [['creation', 'DESC']]
            })
            res.json(movieDESC)
        } else {
            //AllMovies
            const movies = await Movie.findAll({
                atributes: ["title", "image", "qual", "creation"],
            });
            res.json(movies);
        }

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
//PostMovie
export async function postMovie(req, res) {
    const { title, qual, image, creation, characterId } = req.body;
    try {
        let newMovie = await Movie.create(
            {
                title,
                qual,
                image,
                creation,
            },
            {
                fields: ["title", "qual", "image", "creation"],
            }
        );
        if (newMovie) {
            characterId.map(async (character) => {
                await MovieCharacter.create(
                    {
                        movieId: newMovie.id,
                        characterId: character
                    },
                    {
                        fields: ["movieId", "characterId"],
                    }
                )
            })
        }
        return res.json(newMovie);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}

// GetMovie
export async function getMovie(req, res) {
    const { id } = req.params;
    try {
        const movie = await Movie.findOne({
            where: {
                id: id,
            },
        });
        const moviecharacter = await MovieCharacter.findAll({
            attributes: ["characterId"],
            where: { movieId: id }
        })
        res.json({ movie, characters: moviecharacter });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
//PutMovie
export const putMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, qual, image, creation } = req.body;

        const movie = await Movie.findByPk(id);
        movie.title = title;
        movie.qual = qual;
        movie.image = image;
        movie.creation = creation;

        await movie.save();

        res.json(movie);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
//DeleteMovie
export async function deleteMovie(req, res) {
    const { id } = req.params;
    try {
        await Movie.destroy({
            where: {
                id: id,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getMovieName(req, res) {
    const { title } = req.params;
    try {
        const movie = await Movie.findOne({
            where: {
                title: title,
            },
        });
        res.json(movie);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function getMovieGender(req, res) {
    const { genderId } = req.params;
    try {
        const movie = await Movie.findOne({
            where: {
                genderId: genderId,
            },
        });
        res.json(movie);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function getMoviesAD(req, res) {
    try {
        if (req.params.ASC) {
            const moviesASC = await Movie.findAll({
                atributes: ["title", "image", "qual", "creation"],
                order: ['creation', 'ASC']

            });
            res.json(moviesASC);
        } else if (req.params.DESC) {
            const moviesDESC = await Movie.findAll({
                atributes: ["title", "image", "qual", "creation"],
                order: ['creation', 'DESC']
            });
            res.json(moviesDESC);
        }

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}