import React from "react";
import './style.scss';
import Image from '../../assets/Images/cover1.png'
import Image1 from '../../assets/Images/cover2.png'
import Image2 from '../../assets/Images/cover3.png'
import Image3 from '../../assets/Images/cover4.png'
import { useState } from "react";

// let data=[{src:Image},{src:Image1},{src:Image2},{src:Image3},{src:Image},{src:Image1},{src:Image2},{src:Image3},{src:Image}]
const DrapAndDrop=()=>{
//     const [items, setItems] = useState([
//     { id: 1, src: Image },
//     { id: 2, src: Image1 },
//     { id: 3, src: Image2 },
//     { id: 4, src: Image3 },
//   ]);
    
//     const handledragstart=(v,itemId)=>{
        
//         v.dataTransfer.setData('text/plain', itemId);
//     }
//     const handledragover=(v)=>{
//         v.preventDefault();
//     }
//     const handledragdrop=(e,targetId)=>{
//         const draggedItemId = e.dataTransfer.getData('text/plain');

//   const newItems = [...items];
//   const draggedItem = newItems.find((item) => item.id === Number(draggedItemId));
//   const targetItem = newItems.find((item) => item.id === targetId);

//   const draggedItemPosition = draggedItem.position;
//   draggedItem.position = targetItem.position;
//   targetItem.position = draggedItemPosition;

//   setItems(newItems);
//     }
const [items, setItems] = useState([
    { id: 1, position: 1 },
    { id: 2, position: 2 },
    { id: 3, position: 3 },
  ]);
  const handleDragStart = (e, itemId) => {
  e.dataTransfer.setData('text/plain', itemId);
};
const handleDragOver = (e, itemId) => {
  e.preventDefault();
};
const handleDrop = (e, targetId) => {
  const draggedItemId = e.dataTransfer.getData('text/plain');

  const newItems = [...items];
  const draggedItem = newItems.find((item) => item.id === Number(draggedItemId));
  const targetItem = newItems.find((item) => item.id === targetId);

  const draggedItemPosition = draggedItem.position;
  draggedItem.position = targetItem.position;
  targetItem.position = draggedItemPosition;

  setItems(newItems);
};

    return(
        <div className="dragdropcontainer">
           
            <div>
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, item.id)}
          onDragOver={(e) => handleDragOver(e, item.id)}
          onDrop={(e) => handleDrop(e, item.id)}
        >
          {item.id}
        </div>
      ))}
    </div>
        
        </div>
    )
}
export default DrapAndDrop