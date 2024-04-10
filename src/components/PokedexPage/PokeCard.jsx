import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './style/PokeCard.css'

const PokeCard = ({ pokeInfo }) => {
  const [pokemon, getPokemon] = useFetch(pokeInfo.url);

  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate();

  const handlePokeDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`);
  };

  return (
    <div className="container_resident">
      <div className={`resident-card card border-${pokemon?.types[0].type.name}`} onClick={handlePokeDetail}>
        <header className={`header_card bg-${pokemon?.types[0].type.name}`}>
          <img className="img_card" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="principal_card">
          <h3 className={`name_card color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <ul className="types_card">
            {pokemon?.types.map(typeInfo => (
              <li className="type_card" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))}
          </ul>
        </section>
        <hr className="hr_card" />
        <section className="stats_card">
          <ul className="list_card">
            {pokemon?.stats.map(statInfo => (
              <li className="stat_card" key={statInfo.stat.url}>
                <span className="stat_label_card">{statInfo.stat.name}</span>
                <span className={`stat_value_card color-${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PokeCard;