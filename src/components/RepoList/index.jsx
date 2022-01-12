import { RepoItem } from '../RepoItem';

const repo = {
  name: 'Unform',
  desc: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export const RepoList = () => {
  return (
    <section className="repo-list">
      <h1>Lista de Repos</h1>

      <ul>
        <RepoItem repo={repo} />
      </ul>
    </section>
  );
};
