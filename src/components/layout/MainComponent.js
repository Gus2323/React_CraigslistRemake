import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from '../pages/HomePage';
import Grocery from '../pages/GroceryPage';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/groceries' component={Grocery} />
                    {/* <Route exact path="/contactus" component={Contact} /> */}
                    <Redirect to='/' />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;