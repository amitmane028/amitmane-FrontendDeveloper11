import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Pagination } from "react-bootstrap";

function ApiData() {
    const [data, setData] = useState([]);
    const columns = [
        { dataField: 'id', text: 'id' },
        { dataField: 'type', text: 'type' ,sort:true},
        { dataField: 'serial', text: 'serial',sort:true },
        { dataField: 'status', text: 'status',sort:true },
        { dataField: 'reuse_count', text: 'reuse_count',sort:true },
        { dataField: 'water_landings', text: 'water_landings',sort:true }
    
    ]

    const pagination=paginationFactory({
      page:1,
      sizePerPage:5,
      lastPageText:'>>',
      firstPageText:'<<',
      nextPageText:'>',
      prePageText:'<',
      showTotal:true,
      alwaysShowAllBtns:true,
      onPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage);
      },
      onSizePerPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage);
      }

    });

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/capsules")
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div>
                <BootstrapTable bootstrap4 keyField="id"
                 columns={columns} 
                 data={data} 
                 pagination={pagination}
                 />
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
