const { getFavorites, addFavorite, deleteFavorite } = require("../models/favorites")

exports.useFavorites = async (req, res) => {
    const { moduleName, parameter } = req.body
    if (moduleName === "readFavorites") {
        const favorite = await getFavorites()
        res.json(favorite)
        return
    }

    if (moduleName === "addFavorites") {
        await addFavorite(parameter)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "Add new member success!",
        })
        return
    }

    if (moduleName === "deleteFavorites") {
        await deleteFavorite(parameter.id)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "delete success",
        })
    }
}