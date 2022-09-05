const { db } = require("../firebase")
const { collection, doc, getDocs, setDoc, addDoc, deleteDoc } = require("@firebase/firestore")

exports.useMembers = async (req, res) => {
    const { moduleName, parameter } = req.body
    if (moduleName === "readPiPiMembers") {
        const members = []
        const querySnapShot = await getDocs(collection(db, "members"))
        querySnapShot.forEach(doc => {
            members.push({
                id: doc.id,
                ...doc.data(),
                isEditting: false
            })
        })
        res.json(members)
        return
    }

    if (moduleName === "addPiPiMembers") {
        await addDoc(collection(db, "members"), parameter)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "Add new member success!",
        })
        return
    }

    if (moduleName === "updatePiPiMembers") {
        const { id, ...other } = parameter
        await setDoc(doc(db, "members", id), other)
        res.json({
            statusCode: 200,
            status: "ok",
            message: "update success",
        })
        return
    }

    if (moduleName === "deletePiPiMembers") {
        const { id } = parameter
        await deleteDoc(doc(db, "members", id))
        res.json({
            statusCode: 200,
            status: "ok",
            message: "delete success",
        })
    }
}