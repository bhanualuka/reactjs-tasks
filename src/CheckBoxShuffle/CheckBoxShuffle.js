import React, { useState } from "react";
import "./CheckBoxShuffle.css";

const CheckBoxShuffle = () => {
  const [list1, setList1] = useState([
    { title: "Item1", checked: false },
    { title: "Item2", checked: false },
    { title: "Item3", checked: false },
    { title: "Item4", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "ItemA" },
    { title: "ItemB" },
    { title: "ItemC" },
    { title: "ItemD" },
  ]);

  const handleShuffleItems = () => {
    const ShuffleItems1 = [...list1];
    const ShuffleItems2 = [...list2];

    ShuffleItems1.forEach((item, indx) => {
      if (item.checked) {
        const temp = ShuffleItems1[indx].title;
        ShuffleItems1[indx].title = ShuffleItems2[indx].title;
        ShuffleItems2[indx].title = temp;
      }

      item.checked = false;
    });

    setList1(ShuffleItems1);
    setList2(ShuffleItems2);
  };

  const handleCheckedItems = (indx) => {
    const updatedList1 = [...list1];
    updatedList1[indx].checked = !updatedList1[indx].checked;
    setList1(updatedList1);
  };

  return (
    <div className="lists">
      <div className="list1">
        <h3>List1</h3>
        <ul>
          {list1.map((item, indx) => {
            return (
              <li key={indx}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckedItems(indx)}
                />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="list2">
        <h3> List2</h3>

        <ul>
          {list2.map((item, indx) => {
            return <li key={indx}>{item.title}</li>;
          })}
        </ul>
      </div>

      <button onClick={handleShuffleItems}> Suffle Checked Items </button>
    </div>
  );
};

export default CheckBoxShuffle;
