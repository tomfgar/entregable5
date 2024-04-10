import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState('');
  const [typeSelected, setTypeSelected] = useState('allPokemons');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10); // Valor predeterminado
  const [darkMode, setDarkMode] = useState(false);

  const inputSearch = useRef();
  const trainer = useSelector(states => states.trainer);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${(currentPage - 1) * pokemonsPerPage}`;
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons();
    } else {
      getPokeByType(typeSelected);
    }
  }, [typeSelected, currentPage, pokemonsPerPage]);

  const handleSubmit = e => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPokemonsPerPage(size);
    setCurrentPage(1); // Reiniciar a la primera página cuando se cambia el tamaño de la página
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pokemonsFiltered = pokemons?.results.filter(poke => poke.name.includes(pokeSearch));

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header class="main_header">
        <img src="" alt="" />
      </header>

      <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div className="select-wrapper">
        <label className="select-label" htmlFor="pageSize">Pokemons per page:</label>
        <select id="pageSize" className="select-input" value={pokemonsPerPage} onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}>
          {[4, 8, 12, 16, 20].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <p className="welcome_title">Welcome <span className="trainee_name">{trainer}</span>, here you can find your favorite Pokemons!</p>
      <form onSubmit={handleSubmit} className="search_form">
        <input ref={inputSearch} type="text" placeholder="Enter your Pokemon name" className="search_input" />
        <button className="search_button">Search</button>
      </form>
      <SelectType
        setTypeSelected={setTypeSelected}
      />
      <ListPokemons
        pokemons={pokemonsFiltered}
        currentPage={currentPage}
        pokemonsPerPage={pokemonsPerPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />

      <footer className="main_footer">
        <img src="" alt="" />
      </footer>
    </div>
  );
};

export default PokedexPage;