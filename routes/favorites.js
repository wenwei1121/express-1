const Router = require("express")
const router = Router()
const { useFavorites } = require("../controllers/favorites")

// 改用引入 controller, 要用 post(path, controller.js)
router.post("/favorites", useFavorites)

module.exports = router