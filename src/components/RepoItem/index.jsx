export const RepoItem = (props) => {
  return (
    <li>
      <strong>{props.repo.name}</strong>
      <p>{props.repo.desc}</p>
      <a href={props.repo.link}>Acessar repo</a>
    </li>
  );
};
