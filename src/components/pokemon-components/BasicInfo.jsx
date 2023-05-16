export const BasicInfo = ({
  id,
  name,
  baseExperience,
  height,
  order,
  weight,
}) => {
  return (
    <>
      <h3>Basic Information:</h3>
      <ul>
        <li key={id}>Id: {id}</li>
        <li key={name}>Name: {name}</li>
        <li key={height}>Height: {height}</li>
        <li key={weight}>Weight: {weight}</li>
        <li key={baseExperience}>Starting Exp: {baseExperience}</li>
        <li key={order}>order: {order}</li>
      </ul>
    </>
  );
};
