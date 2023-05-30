export function Ability(props) {
  const { ability } = props;

  return (
    <>
      <li key={ability.ability.name}>{ability.ability.name}</li>
    </>
  );
}
