export function Stat(props) {
  const { statName, baseStat } = props;

  return (
    <>
      <li key={statName}>
        {statName}: {baseStat}
      </li>
    </>
  );
}
