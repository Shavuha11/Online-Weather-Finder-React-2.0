function SearchPanel({
    searchValue,
    onChangeSearchValue,
    onSubmitSearch,
    loading
}) {
    return (
        <div className="panel-block">
            <div className="panel-heading">
                <h2>Поиск города</h2>
                <p>Введите название города и получите текущую погоду.</p>
            </div>

            <form className="search-form" onSubmit={onSubmitSearch}>
                <label className="search-label" htmlFor="city-input">
                    <span className="small-emoji" aria-hidden="true">
                    🔍
                    </span>
                    <input
                    id="city-input"
                    type="text"
                    placeholder="Например, Tashkent"
                    value={searchValue}
                    onChange={(event) => onChangeSearchValue(event.target.value)}
                    />
                </label>

                <button className="search-button" type="submit" disabled={loading}>
                    {loading ? "Загрузка..." : "Показать погоду"}
                </button>
            </form>
        </div>
    )
}

export default SearchPanel