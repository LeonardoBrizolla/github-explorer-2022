export const RepoItem = (props) => {
  return (
    <li>
      <strong>{props.repo.name}</strong>
      <p>{props.repo.description}</p>
      <a href={props.repo.html_url}>Acessar repo</a>
    </li>
  );
};
