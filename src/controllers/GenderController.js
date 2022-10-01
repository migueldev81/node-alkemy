import { Gender } from '../models/Gender.js'

export async function getGenders(req, res) {
    try {
        const genders = await Gender.findAll({
            atributes: ["name", "image"],
        });
        res.json(genders);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function postGender(req, res) {
    const { name, image} = req.body;
    try {
        let newGender = await Gender.create(
            {
                name,
                image,
            },
            {
                fields: ["name", "image"],
            }
        );
        return res.json(newGender);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}

// Request HTTP with Params
export async function getGender(req, res) {
    const { id } = req.params;
    try {
        const gender = await Gender.findOne({
            where: {
                id,
            },
        });
        res.json(gender);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const putGender = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, qual, image, creation } = req.body;

        const gender = await Gender.findByPk(id);
        gender.name = name;
        gender.image = image;

        await gender.save();

        res.json(gender);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export async function deleteGender(req, res) {
    const { id } = req.params;
    try {
        await Gender.destroy({
            where: {
                id: id,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}