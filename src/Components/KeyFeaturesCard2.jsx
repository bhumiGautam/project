import './keyFeaturesCard.css'
import Card from 'react-bootstrap/Card';

function KeyFeaturesCard({title,src,text,backgroundColor,marginBottom}) {

    const cardStyle = {
        // width: '14rem',
        backgroundColor: backgroundColor, // Dynamically set background color
        borderBottomRightRadius: '40%',
        border:'none',
        marginBottom: marginBottom
      };


  return (
    <center>
    <Card style={cardStyle} className='card' >
      <center><Card.Img variant="top" src={src} className='card-image'  /> </center>
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>
         {text}
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
  );
}

export default KeyFeaturesCard;