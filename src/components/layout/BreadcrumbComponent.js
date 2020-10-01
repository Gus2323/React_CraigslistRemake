import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const BreadcrumbNav = (props) => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.page}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.page}</h2>
            <hr />
        </div>
    );
};

export default BreadcrumbNav;