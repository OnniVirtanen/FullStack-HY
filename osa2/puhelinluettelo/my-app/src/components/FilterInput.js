const FilterInput = ({handleFilterChange}) => {
    return (
        <div>
        filter shown with <input
        onChange={handleFilterChange}
        />
        </div>
    )
}

export default FilterInput