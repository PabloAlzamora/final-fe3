import { useDentistState } from '../Components/utils/global.context';
import '../index.css';
import Card from '../Components/Common/Card';
import './Favs.css'

const Favs = () => {
  const { state, dispatch } = useDentistState();

  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="container">
        <div className="card-grid">
          {/* Renderizar las tarjetas de favoritos */}
          {state.favs.length > 0 && (
            <>
              {state.favs.map((favorite) => (
                <Card key={favorite.id} dentista={favorite} />
              ))}
            </>
          )}
        </div>
        {/* Botón para eliminar todos los favoritos */}
        {state.favs.length > 0 && (
          <button
            className="centerButton"
            onClick={() => dispatch({ type: 'REMOVE_ALL' })}
          >
            Delete All 🗑️
          </button>
        )}
      </div>
    </main>
  );
};

export default Favs;