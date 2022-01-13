import { useState, useEffect } from 'react';
import './style.scss';
import { RepoItem } from '../RepoItem';

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

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
