export function HeldItem(props) {
  const { itemName } = props;

  return (
    <>
      <li key={itemName}>{itemName}</li>
    </>
  );
}
