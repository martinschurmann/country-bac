# country-bac.js

> Get the the BAC limit of a country.

## Installation

```bash
npm install --save country-bac
yarn add country-bac
```

## Usage

```js

import { getCountryBAC, getAvailableCountries, getAllCountries } from 'country-bac';

const countryBAC = getCountryBAC('contry-name' || 'country-iso'); // ej. '0.08'
const countryLimits = getCountryLimits('contry-name' || 'country-iso'); // ej. { generalPopulation: '0.08', noviceDrivers: '0.05', professionalDrivers: '0.00' }
const listOfAvailableCountries = getAvailableCountries(); // [{name: 'Austria', iso: 'AT'} ...]
const listOfAllCountriesBAC = getAllCountries(); // [{"country":"Austria","iso":"AT","limit":"0.05","novice":"0.01","professional":"0.01"}, ...]

```