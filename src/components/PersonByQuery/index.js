import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PersonByQuery extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 1 };
  }
  
  componentDidMount() {
    const { page } = this.state;
    const { query } = this.props.match.params;
    this.props.fetchPersons(page, query);
  }
  componentWillUpdate(nextProps, nextState) {
    const { page } = this.state;
    const { query } = this.props.match.params;
    if (page !== nextState.page) {
      this.props.fetchPersons(nextState.page, query);
    };
  }
  componentWillReceiveProps(nextProps) {
    const { page } = this.state;
    const { query } = this.props.match.params;
    if (query !== nextProps.match.params.query) {
      this.setState({ page: 1});
      this.props.fetchPersons(page, nextProps.match.params.query)
    };
  }

  renderList() {
    return this.props.persons.map(person => {
      return <Link to={`/person/${person.id}`} key={person.id} className='personQueryList__item'>
        <h5 className='personQueryList__title'>{person.name}</h5>
        <div className='personQueryList__poster'>
          {
            person.profile_path
            ? <img alt='poster' src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}/>
            : <div className='personQueryList__noPoster'></div>
          }
        </div>
      </Link> 
    });
  }

  render() {
    return (
      <div className='personQueryList' >
        {this.renderList()}
      </div>
    );
  }
};

