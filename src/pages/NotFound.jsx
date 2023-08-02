import { Link } from 'react-router-dom';

function NotFoundPage(){
    return (
        <div style={{margin: '0 auto', textAlign: 'center'}}>
          <img src="/images/not-found.avif" alt="Not Found" style={{height: 'auto', width: '50%'}} /><br/>
          <Link to="/" className="btn btn-lg btn-primary">Go to Home</Link>
        </div>
      );
}

export default NotFoundPage;