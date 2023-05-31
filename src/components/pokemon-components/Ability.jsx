export function Ability(props) {
  const { ability } = props;

  return (
    <>
      <li key={ability}>{ability}</li>
    </>
  );
}
