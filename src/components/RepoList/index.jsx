import { useState, useEffect } from 'react';
import './style.scss';
import { RepoItem } from '../RepoItem';

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
        {repos.map((repo) => (
          <RepoItem key={repo.name} repo={repo} />
        ))}
      </ul>
    </section>
  );
};
