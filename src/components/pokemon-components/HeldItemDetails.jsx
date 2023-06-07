import { useState } from "react";

export function HeldItemDetails(props) {
  const [basicInfo, setBasicInfo] = useState();
  const [flingEffect, setFlingEffect] = useState();
  const [effectEntries, setEffectEntries] = useState();
  const [flavorText, setFlavorText] = useState();

  async function hitApi(searchTerm) {
    await fetch("http://localhost:9090/item/id/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        setBasicInfo({
          id: data.id,
          name: data.name,
          const: data.const,
          flingPower: data.flingPower,
          category: data.category,
        });
        setFlingEffect(data.flingEffect);
        setAttributesList(data.attributesList);
        setEffectEntries(data.effectEntries);
        setFlavorText(data.flavorText);
      });
  }

  return (
    <>
      <h3>basic info</h3>
      <ul>
        <li key={basicInfo.id}>Id: {basicInfo.id}</li>
        <li key={basicInfo.name}>Name: {basicInfo.name}</li>
        <li key={basicInfo.const}>const: {basicInfo.const}</li>
        <li key={basicInfo.category}>category: {basicInfo.category}</li>
      </ul>
      {flingEffect && (
        <>
          <p>{flingEffect.name}</p>
        </>
      )}
      {effectEntries && <></>}
    </>
  );
}
