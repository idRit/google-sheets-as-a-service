const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1hWRmuspSmjlqO9-lpvG0pC93-c5GZVKDL07PdeNHSe8');

const init = async () => {
    await doc.useServiceAccountAuth(require('../client_secret.json'));
    await doc.loadInfo();
    console.log(doc.title);
    return doc.sheetsByIndex[0];
}

const validateConfig = async (object) => {
    if (typeof object === "undefined") {
        return false;
    }
    return true;
}

exports.addRow = async (object) => {
    const sheet = await init();
    if (validateConfig(object)) {

    } else {

    }
    return {
        err: "Under construnction!"
    }
}

exports.deleteRow = async (query) => {
    const sheet = await init();
    if (validateConfig(query)) {

    } else {
        
    }
    return {
        err: "Under construnction!"
    }
}

exports.updateRow = async (query, update) => {
    const sheet = await init();
    const rows = await sheet.getRows();
    return {
        err: "Under construnction!"
    }
}

exports.viewRow = async (query) => {
    const sheet = await init();
    let rows;
    if (validateConfig(query)) {
        rows = await sheet.getRows(query);
    } else {
        rows = await sheet.getRows();
    }
    return rows;
}