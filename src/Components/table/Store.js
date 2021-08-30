import React,{useState} from 'react'

const itemList = [
    { store_id: 1, location: "Colombo", capacity:"50" },
    { store_id: 2, location: "Colombo", capacity:"100" },
    { store_id: 3, location: "Colombo", capacity:"60" },
    
  ];
const Store = () => {
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
            <th>Location</th>
            <th>Capacity</th>
            
            <th></th>
          </thead>
          <tbody>
            {itemList.map((value, i) => {
              const key = `item${i}`;
              return (
                <tr key={key} >
                  <td>{value.store_id}</td>
                  <td>{value.location}</td>
                  <td>{value.capacity}</td>
                
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
        </div>
        </div>
    )
}

export default Store
