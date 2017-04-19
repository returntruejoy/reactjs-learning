/**
 * Created by turjoy on 4/16/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(function(lang) {
        //console.log('down here', this)
        return (
          <li
            style={lang===props.selectedLanguage ? {color: 'red'}:null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>{lang}</li>
        )})}
    </ul>
  )
}

function RepoGrid(props) {
  //console.log(props.repos);
  return (
    <ul className="popular-list">
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index+1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={'Avatar for '+repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(()=>({
      selectedLanguage: lang,
      repos: null
    }));

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(()=>({repos:repos}));
      }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos ? <p>LOADING...</p> : <RepoGrid
            repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular;