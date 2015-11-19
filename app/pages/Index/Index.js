import React from 'react';
import _ from "lodash";
import AppActionCreator from '../../actions/AppActionCreator';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoadingWave from '../../components/LoadingWave/LoadingWave';
import JiraStore from '../../stores/JiraStore/JiraStore';
import { messages } from '../../config/messages';


export default class Index extends React.Component {

  constructor(props, ...args) {
    super(props, ...args);
    this.state = this._getInitialState();
  }

  componentWillMount() {

  }

  componentWillUnmount() {
   
  }

  render() {
    return (<div className="index-component-container">
      <Header />
      <div className="row">
        <div className="columns small-12 text-center">
          { _.isEmpty(this.state.model) ?
            <LoadingWave />
            :
            <div> All the things! </div>
          }
        </div>
      </div>
      <Footer />
    </div>);
  }

  _getInitialState() {
    return {
      messages: messages(),
      model: JiraStore.getJiraData()
    }
  }
}

Index.contextTypes = {
  router: React.PropTypes.func.isRequired
};

