import CountryList from "./CountryList";
import CountryInformation from "./CountryInformation";

const ShowCountries = ({countries, input}) => {

    const listOfNames = [];

    /*   */
    if (countries != "") {
        for (let i = 0; i < 250; i++) {
        listOfNames.push(countries[i].name.common);
        }
    }

    const index = listOfNames.filter(common => common.startsWith(input));

    const countryIndex = listOfNames.indexOf(index.toString())

    if (index.length < 10 && index.length > 1) {
        return (
            <CountryList index={index} listOfNames={listOfNames} countries={countries} countryIndex={countryIndex}/>
        )   
    } 
    else if (index.length == 1) {
        const languageArray = Object.values(countries[countryIndex].languages)

        return (
            <CountryInformation languageArray={languageArray} countries={countries} countryIndex={countryIndex}/>
        )
    }
    else {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

}

export default ShowCountries