const FindInput = ({newInput, handleInputChange}) => {
    return (
        <div>
            find countries <input 
            value = {newInput}
            onChange = {handleInputChange}
            />
        </div>
    )
}

export default FindInput