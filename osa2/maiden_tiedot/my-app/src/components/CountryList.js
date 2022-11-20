import Country from "./Country"
import CountryInformation from "./CountryInformation"

const CountryList = ({index, listOfNames, languageArray, countries, countryIndex}) => {
    const [showButton, setShowButton] = ("not active")

    if (showButton == "active") {
        return (
            <div>
                <CountryInformation languageArray={languageArray} countries={countries} countryIndex={countryIndex}/>
            </div>
        )
    } else {
        return (
        <div>  
        {
        index.map(list => {
            return (
                <div>
                    <Country key={parseInt(listOfNames.indexOf(list))} name={list}/>
                </div>
            )
        })
    }
    </div>
    )
    }
}

export default CountryList