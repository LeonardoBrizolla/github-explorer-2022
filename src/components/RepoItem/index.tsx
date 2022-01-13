interface RepoItemProps {
  repo: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepoItem = (props: RepoItemProps) => {
  return (
    <li>
      <strong>{props.repo.name}</strong>
      <p>{props.repo.description}</p>
      <a href={props.repo.html_url}>Acessar repo</a>
    </li>
  );
};
