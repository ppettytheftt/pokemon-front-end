import Popup from "reactjs-popup";

export function HeldItem(props) {
  const { itemName, itemId } = props;

  return (
    <>
      <li key={itemName}>{itemName}</li>
      <div>
        <Popup
          trigger={<button> Click to see item facts </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <HeldItemDetails itemId={itemId} />
              <div>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
}
