
const Search = ({search, setSearch}) => {
  return ( 
    <div className="search">
        <h4>Pesquisar: </h4>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..." />
      
    </div>
  )
}

export default Search
