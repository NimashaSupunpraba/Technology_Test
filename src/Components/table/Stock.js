import React,{useState} from 'react'

const itemList = [
    { stock_id: 1, count: 10, date:"2021-08-31" },
    { stock_id: 2, count: 30, date:"2021-08-31" },
    { stock_id: 3, count: 40, date:"2021-08-31" },
    
  ];
const Stock = () => {
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
            <th>Count</th>
            <th>Date</th>
            
            <th></th>
          </thead>
          <tbody>
            {itemList.map((value, i) => {
              const key = `item${i}`;
              return (
                <tr key={key} >
                  <td>{value.stock_id}</td>
                  <td>{value.count}</td>
                  <td>{value.date}</td>
                
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

export default Stock
