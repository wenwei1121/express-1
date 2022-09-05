const Router = require("express")
const router = Router()
const { useMembers } = require("../controllers/members")

// 改用引入 controller, 要用 post(path, controller.js)
router.post("/members", useMembers)

module.exports = router