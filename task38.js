"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city('Sialkot');
describe_city('New York', 'America');
describe_city('Paris', 'France');
