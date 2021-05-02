import React from 'react';

function StudentList({student, index,deleteHandler, updateHandler}) {

    return (
        <tr>
            <td>{index}</td>
            <td>{student.name}</td>
            <td>{student.batch}</td>
            <td>{student.roll}</td>
            <td>{student.class}</td>
            <td>
                <button style={{fontSize:20, backgroundColor:"red", color:"whitesmoke",borderRadius:10,border:"1px solid white" }} onClick={()=> deleteHandler(index)}>
                    Delete
                </button>
            </td>

            <td>
                <button style={{fontSize:20, backgroundColor:"green", color:"whitesmoke",borderRadius:10,border:"1px solid white" }} onClick={()=> updateHandler(student, index)}>Update </button>
            </td>
        </tr>
    )
}


export default StudentList;