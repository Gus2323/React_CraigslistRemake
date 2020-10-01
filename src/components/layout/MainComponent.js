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
import { UncontrolledCarousel} from 'reactstrap';

const mapStateToProps = state => {
    return {
        forsale: state.forsale
    };
};


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        const ForSaleWithId = ({ match }) => {
            
            const Example = () => <UncontrolledCarousel items={this.props.forsale} />;
            return (
                <div forsale={this.props.forsale.filter(forsale => forsale.id === +match.params.forsaleId)[0]}>
                    <BreadcrumbNav page="For Sale"/>
                    <Example />
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
