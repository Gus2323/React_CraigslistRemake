import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" color="primary">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" height="40" width="40" alt="Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/groceries">
                                        <i className="fa fa-list fa-lg" /> Groceries
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/* <Jumbotron fluid className="jumbotron-cover-image">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Grocery Store</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
            </React.Fragment>
        );
    }
}

export default Header;