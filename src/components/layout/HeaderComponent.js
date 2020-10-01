import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
                <Navbar dark sticky="top" expand="md" className="purple">
                    <div className="container">
                        <NavbarBrand className="mr-5" href="/">
                            <img src="https://image.flaticon.com/icons/png/512/3100/3100151.png" height="40" width="40" alt="Logo" />
                        </NavbarBrand>
                        <input type="text" placeholder="Search.."></input>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/community">
                                        {/* <Hint></Hint> */}
                                        <i className="fa fa-home fa-lg" /> Community
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        <i className="fa fa-list fa-lg" /> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/discussionforums">
                                        <i className="fa fa-list fa-lg" /> Discussion Forums
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/housing">
                                        <i className="fa fa-list fa-lg" /> Housing
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/forsale">
                                        <i className="fa fa-list fa-lg" /> For Sale
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/jobs">
                                        <i className="fa fa-list fa-lg" /> Jobs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gigs">
                                        <i className="fa fa-list fa-lg" /> Gigs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                    {/* <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/furniture">
                                <i className="fa fa-home fa-lg" /> Furniture
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Cars">
                                <i className="fa fa-list fa-lg" /> Cars
                            </NavLink>
                        </NavItem>
                    </Nav> */}
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