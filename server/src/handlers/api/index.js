const axios = require('axios');

exports.getRandomUser = async (req, res, next) => {
    try {
        
        const user = await axios.get('https://randomuser.me/api/');
        console.log(user.data.results[0]);
        return res.status(200).json({"randoUser": user.data.results[0]})
    }

    catch (err) {
        console.log("Error")
        return res.status(400).json(err);
    }
}