import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApiData() {
    const [data, setData] = useState([]);
    const columns = [
        { dataField: 'id', text: 'id' },
        { dataField: 'type', text: 'type' },
        { dataField: 'serial', text: 'serial' },
        { dataField: 'status', text: 'status' },
        { dataField: 'reuse_count', text: 'reuse_count' },
        { dataField: 'water_landings', text: 'water_landings' }
    
    ]
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/capsules")
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div>
                <BootstrapTable keyField="id" columns={columns} data={data} />
                {/* <table>
                    <tr>
                        <th>id</th>
                        <th>type</th>
                        <th>serial</th>
                        <th>status</th>
                        <th>reuse_count</th>
                        <th>water_landings</th>

                    </tr>
                    {
                        data && data.length > 0 ?
                            data.map((capsule) =>
                                <tr>
                                    <td>{capsule.id}</td>
                                    <td>{capsule.type}</td>
                                    <td>{capsule.serial}</td>
                                    <td>{capsule.status}</td>
                                    <td>{capsule.reuse_count}</td>
                                    <td>{capsule.water_landings}</td>


                                </tr>
                            ) : "loading"
                    }



                </table> */}
            </div>
        </>
    );
}

export default ApiData;
