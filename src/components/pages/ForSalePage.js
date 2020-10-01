import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardColumns} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderForSaleCard({ forsale }) {
    return (
            <Card>
                <CardImg top src={forsale.src} />
                <CardBody>
                    <CardTitle><strong>{forsale.header}</strong></CardTitle>
                    <CardSubtitle>{forsale.caption}</CardSubtitle>
                    <CardText>{forsale.price}</CardText>
                    <Link to={`/forsale/${forsale.key}`}>
                        <Button outline color="primary">View</Button>
                    </Link>
                </CardBody>
            </Card>
    );
}


function ForSale(props) {
    const forsaleList = props.forsale.map(forsale => {
        return (
            <div key={forsale.id}>
                <RenderForSaleCard forsale={forsale} />
            </div>
        );
    });

    return (
        <div className="container">
            <h1>For Sale</h1>
            <div className="row">
            <CardColumns>
                {forsaleList}
            </CardColumns>
            </div>
        </div>
    );
}

export default ForSale;