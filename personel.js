console.log('sanity check running personel.js');

const fs = require('fs');

const getAll = () => {
    try {
        var data = fs.readFileSync('personel-data.json');
        return JSON.parse(data);
    } catch (error) {
        return {
            message: error,
            data: []
        }
    }
};

const saveFile = (obj) => {
    const personelArr = getAll();

    const personelData = {
        _id : obj._id,
        name: obj.name,
        sex: obj.sex,
        age: obj.age,
        role: obj.role
    };

    personelArr.push(personelData);

    fs.writeFileSync('personel-data.json', JSON.stringify(personelArr));
};

module.exports = {getAll, saveFile}