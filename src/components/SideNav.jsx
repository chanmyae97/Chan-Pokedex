import { first151Pokemon, getFullPokedexNumber } from "../utils";

export function SideNav() {
  return (
    <nav>
      <div className="header"></div>
      <h1 className="text-gradient">Pokédex</h1>
      <input placeholder="Eg. 001 or Bulba..." />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button key={pokemon} className={"nav-card"}>
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
