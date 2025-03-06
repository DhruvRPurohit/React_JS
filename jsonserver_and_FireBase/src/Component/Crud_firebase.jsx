import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const Crud_firebase = () => {
    const [data, setData] = useState({
        name: "",
        age: ""
    });

    const [array, setArray] = useState([]);

    // Reference to Firestore collection
    const usersCollectionRef = collection(database, "users");

    // Function to fetch data from Firestore
    const fetchData = async () => {
        const querySnapshot = await getDocs(usersCollectionRef);
        const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArray(usersList);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id!=null)
        {
            const userDoc = doc(database, "users", id);
            await updateDoc(userDoc, { name: data.name, age: Number(data.age) });
            SetId(null); // Reset edit state
        }
        else{
            await addDoc(usersCollectionRef, data);
        }
            setData({ name: "", age: "" });
            fetchData(); // Refresh data after adding
       
    };

    const DeleteData = async (id) => {
        try {
          await deleteDoc(doc(database, "users", id)); // Delete user by ID
          fetchData(); // Refresh the list
        } catch (error) {
          console.error("Error deleting document:", error);
        }
      };
    
    const [id,SetId]=useState(null)
    const EditData=(user)=>{
        setData({name:user.name,age:user.age})
        SetId(user.id)
    }  

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='flex-column flex-md-row vh-100 w-100 d-flex justify-content-center align-items-center gap-5 p-2'>
                <form onSubmit={handleSubmit} className='card border rounded shadow w-50 px-5 pt-5 pb-5'>
                    <h3>Crud With Firebase</h3>
                    <label>Name:</label>
                    <input type="text" className='form-control' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />

                    <label>Age:</label>
                    <input type="number" className='form-control' value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} />

                    <br />
                    <button className='btn btn-primary'>Save Data</button>
                </form>

                <div className='card rounded w-50 shadow px-5 pt-5 pb-5'>
                    <table className='table table-striped-bordered-responsive'>
                        <thead>
                            <tr>
                                <th>INDEX</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            {array.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button className='btn btn-danger mx-1' onClick={()=>DeleteData(user.id)}>Delete</button>
                                        <button className='btn btn-primary mx-1' onClick={()=>EditData(user)}> Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Crud_firebase;
