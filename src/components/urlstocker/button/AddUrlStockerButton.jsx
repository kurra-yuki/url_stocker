import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export const AddUrlStockerButton = ({ urlStockers, setUrlStockers}) => {
  const addStocker = () => {
    const urlStockerId = uuidv4()
      setUrlStockers([
        ...urlStockers, 
        {
          id: urlStockerId,
          draggableId: `item${urlStockerId}`,
        },
    ]);
  };
  return (
    <div className='addUrlStocerButtonArea'>
      <button className='addUrlStockerButton' onClick={addStocker}>+</button>
    </div>
  );
};
