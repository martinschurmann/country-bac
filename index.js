const countries = require('./countries.json');

function getCountryBAC(searchBy) {
    try {
        let foundCountry = countries.find(c => `${c.country}`.toLowerCase() === `${searchBy}`.toLowerCase() ||  `${c.iso}`.toLowerCase() === `${searchBy}`.toLowerCase());
        if (!foundCountry)
            return null;
        return `${foundCountry.limit}`
    } catch (error) {
        return null;
    }
}

function getCountryLimits(searchBy) {
    try {
        let foundCountry = countries.find(c => `${c.country}`.toLowerCase() === `${searchBy}`.toLowerCase() ||  `${c.iso}`.toLowerCase() === `${searchBy}`.toLowerCase());
        if (!foundCountry)
            return null;
        return {
            generalPopulation: foundCountry.limit,
            noviceDrivers: foundCountry.novice,
            professionalDrivers: foundCountry.professional
        }
    } catch (error) {
        return null;
    }
}

function getAvailableCountries() {
    try {
        return countries.map(country => {
            return {
                name: country.country,
                iso: country.iso
            };
        });
    } catch (error) {
        return [];
    }
}

function getAllCountries() {
    try {
        return [...countries];
    } catch (error) {
        return [];
    }
}

module.exports = {
    getCountryBAC,
    getCountryLimits,
    getAvailableCountries,
    getAllCountries
};

console.log(getAllCountries())