const { response } = require("express");

module.exports = app => {
    const document = require("./spreadsheet");

    app.get('/api/getRows', async (req, res) => {
        try {
            let rows = await document.viewRow();
            rows = rows.map(el => {
                return {
                    age: el.age,
                    event: el.event,
                    feeling: el.feeling
                }
            });
            return res.json(rows);
        } catch(error) {
            console.log(error);
            return res.json({
                mesg: "Some error Occured!"
            })
        }
    });
}