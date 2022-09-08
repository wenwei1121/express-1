const Router = require("express")
const router = Router()
const { useFavoriteSearch } = '../controllers/favoriteSearch.js'

router.post('/', useFavoriteSearch)

module.exports = router