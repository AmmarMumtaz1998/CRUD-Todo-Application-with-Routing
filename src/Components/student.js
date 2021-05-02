import { lightBlue } from "@material-ui/core/colors";
import { useState } from "react";
import {data} from "./data";
import StudentList from "./studentList";

function Student(){
    
     const [students, setStudents] = useState(data)
     const [errorMessage, setMessage] = useState("");
     const [name, setName] = useState("")
     const [Batch, setBatch] = useState("")
     const [roll, setRoll] = useState("")
     const [stuClass, setStuClass] = useState("")
     const [flag, setFlag] = useState(false);
     const [updatedIndex, setUpdatedIndex] = useState(0)

    //  on submit handler
    const ctaHandler = () =>{
        setMessage("")
        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
        let student = {
            name, 
            batch: Batch,
            roll,
            class: stuClass
        }
        console.log("student", student);
        setStudents([...students, student]);
        setName("");
        setStuClass("");
        setRoll("");
        setBatch("");
    }
    else {
        setMessage("You can't submit an empty entry, Please fill it.")
        }
    }
// delete handler
    const deleteHandler = (index) =>{
        console.log("index", index);
        let newStudents = students.filter((student, i) =>{
            if(i !== index){
                return student;
            }
        });
        setStudents([...newStudents])
    }
// update handler
    const updateHandler = (student, index) =>{
        // console.log("student", student);
        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);
    }

    const ctaUpdateHandler = () => {
        setMessage("")

        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student;
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    else {
    setMessage("You can't submit an empty entry, Please fill it.")
}
    }
     
    return (
        <div>
            
          <div className="container " style={{ backgroundColor: "#F2FEF9", margin: "o auto", padding:10 }}>
          <div className="row" style={{ marginTop: 70, marginBottom: 20 }}></div></div>

            <h1><u>For the Addition new Students in the List use these inputs</u>.</h1>
              <span style={{fontSize:25}}><b>Name:</b></span>  <input style={{fontSize:20, backgroundColor:"lightBlue", margin:5, borderRadius:7}} type="text" value={name} name="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} /><br/>
              <span style={{fontSize:25}}><b>Batch:</b></span>   <input style={{fontSize:20, backgroundColor:"lightBlue", margin:5, borderRadius:7}} type="text" value={Batch} name="s" placeholder="Enter your Batch" onChange={(e) => setBatch(e.target.value)} /><br/>
              <span style={{fontSize:25}}><b>Roll #:</b></span>   <input style={{fontSize:20, backgroundColor:"lightBlue", margin:5, borderRadius:7}} type="text" value={roll} placeholder="Enter your Roll no." onChange={(e) => setRoll(e.target.value)} /><br/>
              <span style={{fontSize:25}}><b>Class:</b></span>   <input style={{fontSize:20, backgroundColor:"lightBlue", margin:5, borderRadius:7}} type="text" value={stuClass} placeholder="Enter your Class" onChange={(e) => setStuClass(e.target.value)} /><br/>
            {flag ?
                <button style={{border:"1px solid white",fontSize:20, backgroundColor:"#7C27F1", color:"whitesmoke",borderRadius:10 }} onClick={ctaUpdateHandler}>Update</button>  
            :
                <button style={{border:"1px solid white",fontSize:20, backgroundColor:"#7C27F1", color:"whitesmoke",borderRadius:10 }} onClick={ctaHandler}>Add in List</button>
            }
            <p style={{ padding:10, backgroundColor: "whiteSmoke", color: 'red' }}>
               {
                errorMessage
                }
            </p>
            
            
            <hr />
            <h1 style={{border:"1px solid white",borderRadius:10, textAlign:"center", backgroundColor:"#7C27F1", color:"whitesmoke"}}>
                List of all Existing Students
            </h1> 
            <table style={{textAlign:"left",fontSize:20, borderSpacing:10}}>
                <tr>
                    <th>Sr#</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll#</th>
                    <th>Class</th>
                </tr>
                {
                    students.map((item, index) =>{
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
                    })
                }
            </table>
        </div>
    )
}

export default Student;
