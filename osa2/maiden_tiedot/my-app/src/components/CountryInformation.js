import Language from "./Language";

const CountryInformation = ({languageArray, countries, countryIndex}) => {
    return (
        <div>
        <h2>{countries[countryIndex].name.common}</h2>

        <div>capital {countries[countryIndex].capital} </div>
        <div>area {countries[countryIndex].area}</div>

        <h3>languages:</h3>
        <ul>
            {
                languageArray.map(list => {
                    return (
                        <Language key={parseInt(languageArray.indexOf(list))} language={list}/>
                    )
                })
            }
        </ul>
        <img src={countries[countryIndex].flags.png} width="150px"/>
        </div>
    )
}

export default CountryInformation