import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import './DistributeDetailsCard.css'

function DistributeDetailsCard({desc,title,icon}) {
  return (
    <Card  style={{border:'none'}}>
        <center>
      <FontAwesomeIcon icon={icon} className='card-icon' />
      <Card.Body>
        <Card.Title className='card-title1'>{title}</Card.Title>
        <Card.Text className='card-desc1'>
         {desc}
        </Card.Text>
      </Card.Body>
      </center>
    </Card>
  );
}

export default DistributeDetailsCard;