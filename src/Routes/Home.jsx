import { useEffect, useState } from 'react';
import Card from '../Components/Common/Card';
import { getData } from '../Api/dentist';
import { useDentistState } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useDentistState();
  const [dentist, setDentist] = useState([]);
  
useEffect(() => {
    const getDataDentist = async () => {
      let res = await getData();
      setDentist(res);
    };
    getDataDentist();
  }, []);

  return (
    <main className={state.theme}>
      <h1>HOME</h1>
      <div className="card-grid">
        {dentist.map((dentista) => (
          <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home;