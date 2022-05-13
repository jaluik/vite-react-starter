import { Link } from 'react-router-dom';

export default () => (
  <div>
    <p>Home Page</p>
    <p>
      <Link to='/' rel='noopener noreferrer'>
        Home
      </Link>
      {' | '}
      <Link to='/about' rel='noopener noreferrer'>
        About
      </Link>
    </p>
  </div>
);
