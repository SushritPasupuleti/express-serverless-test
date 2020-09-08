exports.getRandomUser = async (req, res, next) => {
    try {
        const list = ["some", "list"]//await db.StoreList.distinct("stateName");

        return res.status(200).json({"stateList": list})
    }

    catch (err) {
        console.log("Error")
        return res.status(400).json(err);
    }
}