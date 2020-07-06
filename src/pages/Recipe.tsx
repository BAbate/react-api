import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const Recipe: React.FC=() => {
    const [foodName, setFoodName] = React.useState<String>();
    const [foodlink, setFoodLink] = React.useState<String>();
    const [foodlists, setFoodLists] = React.useState<Array<String>>();
    const [foodImg, setFoodImage] = React.useState<String>();
    React.useEffect( () => {
        const fetchData = async () => {
            const res = await fetch('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3,'
                );
            
            if (!res.ok){    
                alert('Error');
            }
            
           // try {
            const data = await res.json();
            //} 
             //catch (error) {
               //    console.log(error);
            // }

            //console.log(data);
            setFoodName(data.results[0].title);
            setFoodLink(data.results[0].href);
            setFoodLists(data.results[0].ingredients);
            setFoodImage(data.results[0].thumbnail);
           
        }
       fetchData();
    });

    return(
        <Container>
            <Row>
                <div>
                <p>Recipe for {foodName}</p>
                <p>Recipe for {foodlink}</p>
                {/*
                  <p>Recipe for {foodlists}</p>
                */}
                <p>Recipe for {foodlists}</p>
                <img src={foodImg}/>
                </div>
                
            </Row>
        </Container>
    );
}

export default Recipe;





