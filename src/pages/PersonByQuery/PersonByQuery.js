import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class PersonByQuery extends Component {
  static propTypes = {
    fetchPersons: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        query: PropTypes.string
      }),
    }).isRequired,
    persons: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  state = { page: 1 };

  componentDidMount() {
    const { page } = this.state;
    const { fetchPersons, match } = this.props;
    fetchPersons(page, match.params.query);
  }

  componentWillReceiveProps(nextProps) {
    const { page } = this.state;
    const { fetchPersons, match } = this.props;
    if (match.params.query !== nextProps.match.params.query) {
      this.setState({ page: 1 });
      fetchPersons(page, nextProps.match.params.query);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { page } = this.state;
    const { fetchPersons, match } = this.props;
    if (page !== nextState.page) {
      fetchPersons(nextState.page, match.params.query);
    }
  }

  render() {
    const { persons } = this.props;
    return (
      <div className="personQueryList">
        {persons.map(person => (
          <Link to={`/person/${person.id}`} key={person.id} className="personQueryList__item">
            <h5 className="personQueryList__title">{person.name}</h5>
            <div className="personQueryList__poster">
              {person.profile_path
                ? <img alt="poster" src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} />
                : <div className="personQueryList__noPoster" />}
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
