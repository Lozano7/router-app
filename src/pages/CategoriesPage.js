import { useHistory, useLocation } from 'react-router-dom';

const CategoriesPAge = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search);

  const skip = parseInt(query.get('skip')) || 0;
  const limit = parseInt(query.get('limit')) || 15;

  const history = useHistory();

  const handleNextPage = () => {
    query.set('skip', skip + limit);
    history.push({ search: query.toString() });
  };

  return (
    <div>
      <h1>Categories </h1>
      <h2>skip:{skip}</h2>
      <h2>limit:{limit}</h2>
      <button onClick={handleNextPage}>next</button>
    </div>
  );
};

export default CategoriesPAge;
