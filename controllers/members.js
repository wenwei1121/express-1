const { getMembers, addMember, updateMember, deleteMember } = require("../models/members")

exports.useMembers = async (req, res) => {
    const { moduleName, parameter } = req.body
    if (moduleName === "readPiPiMembers") {
        const members = await getMembers()
        res.json(members)
        return
    }

    if (moduleName === "addPiPiMembers") {
        await addMember(parameter)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "Add new member success!",
        })
        return
    }

    if (moduleName === "updatePiPiMembers") {
        const { id, ...other } = parameter
        await updateMember(id, other)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "update success",
        })
        return
    }

    if (moduleName === "deletePiPiMembers") {
        await deleteMember(parameter.id)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "delete success",
        })
    }
}