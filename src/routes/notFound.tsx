import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div>
        <h2>Did you land here by mistake?</h2>
        <p>
          <Link to="/make-a-burger">Go make yourself a delicious burger!</Link>
        </p>
      </div>
    );
  };
  
  export default NotFound;