import { Character } from '../models/Character.js'
import { MovieCharacter } from '../models/Movie.js'

export async function getCharacters(req, res) {
    try {
        //CharacterByName
        if (req.query.name) {
            const characterName = await Character.findOne({
                where: {
                    name: req.query.name,
                },
            });
            res.json(characterName);
            //CharacterByAge
        } else if (req.query.age) {
            const characterAge = await Character.findAll({
                where: {
                    age: parseInt(req.query.age),
                },
            });
            res.json(characterAge);
        } else {
            //AllCharacters
            const characters = await Character.findAll({
                atributes: ["name", "age", "qual", "history"],
            });
            res.json(characters);
        }




    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
//PostCharacter
export async function postCharacter(req, res) {
    const { name, age, image, history } = req.body;
    try {
        let newCharacter = await Character.create(
            {
                name,
                age,
                image,
                history,
            },
            {
                fields: ["name", "age", "image", "history"],
            }
        );
        return res.json(newCharacter);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}

//GetCharacter
export async function getCharacter(req, res) {
    const { id } = req.params;
    try {
        const character = await Character.findOne({
            where: {
                id,
            },
        });
        const moviecharacter = await MovieCharacter.findAll({
            attributes: ["movieId"],
            where: { characterId: id }
        })
        res.json({ character, movies: moviecharacter });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
//PutCharacter
export const putCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, image, history } = req.body;

        const character = await Character.findByPk(id);
        character.name = name;
        character.age = age;
        character.image = image;
        character.history = history;

        await character.save();

        res.json(character);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
//DeleteCharacter
export async function deleteCharacter(req, res) {
    const { id } = req.params;
    try {
        await Character.destroy({
            where: {
                id: id,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//CharacterByMovies
export async function getCharacterMovies(req, res) {
    const { characterId } = req.params;
    try {
        const moviecharacter = await MovieCharacter.findAll({
            attributes: ["movieId"],
            where: { characterId: characterId }
        })
        res.json({ moviecharacter });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}