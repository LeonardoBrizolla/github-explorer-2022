import { useState, useEffect } from 'react';
import './style.scss';
import { RepoItem } from '../RepoItem';

// https://api.github.com/users/LeonardoBrizolla/repos

const repo = {
  name: 'Unform',
  desc: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/LeonardoBrizolla/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="repo-list">
      <h1>Lista de Repos</h1>

      <ul>
        <RepoItem repo={repo} />
        <RepoItem repo={repo} />
        <RepoItem repo={repo} />
        <RepoItem repo={repo} />
      </ul>
    </section>
  );
};
