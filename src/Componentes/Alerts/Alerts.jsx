
import Alert from "react-bootstrap/Alert";

function Alerts ({text,variant}){

    return (<Alert variant={variant}>
              {text}
            </Alert>
             );
};

export default Alerts;

