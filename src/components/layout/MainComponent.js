import React, { Component } from 'react';
import Header from './HeaderComponent';
import BreadcrumbNav from './BreadcrumbComponent';
import Home from '../pages/HomePage';
import Community from '../pages/CommunityPage';
import Services from '../pages/ServicesPage';
import DiscussionForums from '../pages/DiscussionForumsPage';
import Housing from '../pages/HousingPage';
import ForSale from '../pages/ForSalePage';
// import ForSaleItem from '../pages/ForSaleItem';
import Jobs from '../pages/JobsPage';
import Gigs from '../pages/GigsPage';
// import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';

const mapStateToProps = state => {
    return {
        forsale: state.forsale
    };
};


class Main extends Component {

    render() {
        const HomePage = () => <Home />;

        const Example = () => (<UncontrolledCarousel items={this.props.forsale[0].slides} />);
        console.log(this.props.forsale[0].slides);

        const ForSaleWithId = ({ match }) => {

            return (
                <div forsale={this.props.forsale.filter(forsale => forsale.id === +match.params.forsaleId)[0]}>
                    <BreadcrumbNav page="For Sale" />
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Example />
                            </div>
                            <div className="col-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.1513333502985!2d-122.19539654919022!3d37.73959377966648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8596e981bf9b%3A0x3d97126e594ba789!2sOakland%20Coliseum%20DMV!5e0!3m2!1sen!2sus!4v1601619047328!5m2!1sen!2sus" width="450" height="350" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route exact path='/community' component={Community} />
                                {/* <Route exact path='/community' render={() => <Community community={this.props.community} />} /> */}
                                <Route exact path='/services' component={Services} />
                                <Route exact path='/discussionforums' component={DiscussionForums} />
                                <Route exact path='/housing' component={Housing} />
                                <Route exact path='/forsale' render={() => <ForSale forsale={this.props.forsale} />} />
                                <Route path='/forsale/:forsaleId' component={ForSaleWithId} />
                                <Route exact path='/jobs' component={Jobs} />
                                <Route exact path='/gigs' component={Gigs} />
                                {/* <Route exact path="/contactus" component={Contact} /> */}
                                <Redirect to='/' />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
