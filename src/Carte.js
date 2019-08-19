import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Viewmore from './Viewmore'  
  

const Carte = (props) => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.label}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>{props.text}</CardText>
          {/* <Button>{props.name}</Button> */}
          <Viewmore buttonLabel={props.buttonLabel}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carte;