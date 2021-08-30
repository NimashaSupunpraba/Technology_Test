import React,{useState} from 'react'
import './style.css'
import Modal from "./Modal.js";


const itemList = [
  { item_id: 1, item_name: "Shirts" },
  { item_id: 2, item_name: "T-Shirts" },
  { item_id: 3, item_name: "Frocks " },
];

const StoreItem = () => {
    const [updateData, setUpdateData] = useState([]);

    const onBtnPress = (i) => {
        console.log(i);
        // console.log(vaccineList[i]);
        // setSelectedItem(i);
        // setUpdateData(vaccineList[i]);
      };
    return (
        <div>
            <div className="table_container">
        <table>
          <thead>
            <th> ID</th>
            <th>Item Name</th>
            
            <th></th>
          </thead>
          <tbody>
            {itemList.map((value, i) => {
              const key = `item${i}`;
              return (
                <tr key={key} >
                  <td>{value.item_id}</td>
                  <td>{value.item_name}</td>
                
                  <td>
                    {/* <Button
                      variant="outlined"
                      color="primary"
                      style={{ maxHeight: "30px", minHeight: "30px" }}
                      onClick={() => {
                        handleClickOpen();
                        onBtnPress(i);
                      }}
                    >
                      Edit
                    </Button> */}
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => onBtnPress(i)}
                    >
                      edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        <div>
          <Modal
           item_id={updateData.item_id}
            item_name={updateData.item_name}

          />
        </div>
        </div>
    )
}

export default StoreItem
