// Presentational Component
// Converted into functional component - A component just used for presentation and contains no state properties or constructor

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    const commments2s = comments.map((c) => {
        return (
            <div>
                <div key={c.id} className="list-unstyled">
                    <ListGroup>
                        <ListGroupItem>{c.comment}</ListGroupItem>
                        <ListGroupItem>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}</ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        );
    });
    return commments2s;
}

function RenderDish({ dish, comments }) {
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <header>
                    <h4>
                        Comments
                    </h4>
                </header>
                <RenderComments comments={comments} />
            </div>
        </div>
    )
}

function Dishdetail(props) {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <RenderDish dish={props.dish} comments={props.comments}/>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Dishdetail;