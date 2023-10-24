import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";


const testUsersData = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "birthday_date": "1990-05-15",
      "phone_number": "+1 (123) 456-7890",
      "address": "123 Main St, City, Country"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "birthday_date": "1985-10-20",
      "phone_number": "+1 (987) 654-3210",
      "address": "456 Elm St, Town, Country"
    },
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "birthday_date": "1990-05-15",
        "phone_number": "+1 (123) 456-7890",
        "address": "123 Main St, City, Country"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "birthday_date": "1985-10-20",
        "phone_number": "+1 (987) 654-3210",
        "address": "456 Elm St, Town, Country"
      },
  ];

const TableView = () => {
    const [showMore, setShowMore] = useState(10);

    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState({
      name: '',
      email: '',
      birthday_date: '',
      phone_number: '',
      address: '',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10); 

    useEffect(() => {
        setLoading(true);
        axios
          .get('http://146.190.118.121/api/table/')
          .then((response) => {
            setTableData(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

    const [editableData, setEditableData] = useState({}); 
    const [updatedData, setUpdatedData] = useState({}); 

    const indexOfLastData = currentPage * perPage;
    const indexOfFirstData = indexOfLastData - perPage;
    // const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
    const currentData = testUsersData.slice(indexOfFirstData, indexOfLastData);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const handleEdit = (id) => {
        setEditableData({ ...editableData, [id]: true });
    };

    const handleSave = (id) => {
      setLoading(true);
      axios
        .put(`http://146.190.118.121/api/table/${id}`, tableData)
        .then(() => {
          setLoading(false);
          enqueueSnackbar('Data Edited successfully', { variant: 'success' });
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar('An error occurred. Please check the console', { variant: 'error' });
          console.error('Error editing:', error);
        });

        setEditableData({ ...editableData, [id]: false });
    };

    const handleChange = (id, fieldName, value) => {
        setUpdatedData({ ...updatedData, [id]: { ...updatedData[id], [fieldName]: value } });
    };

    // const loadMore = () => {
    //     setShowMore((prevShowMore) => prevShowMore + 10); 
    // };

    const displayedData = testUsersData.slice(0, showMore);
    // const displayedData = tableData.slice(0, showMore);

    if (loading) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col p-10 rounded-lg shadow-2xl w-30">
                <h2 className="text-4xl font-extrabold text-start mb-6">
                    <Link to='/'>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500" >Table.io</span>
                    </Link> 
                </h2>
                <div className="animate-pulse text-4xl text-center px-6 py-3 text-gray-700">Loading...</div>
            </div>
        )
    }

    if (!displayedData || displayedData.length === 0) {
        return (
        <div className="bg-gray-100 min-h-screen flex flex-col p-10 rounded-lg shadow-2xl w-30">
            <h2 className="text-4xl font-extrabold text-start mb-6">
                <Link to='/'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500" >Table.io</span>
                </Link> 
            </h2>
            <div className="text-4xl text-center px-6 py-3 p-10 text-gray-700">No data available.</div>
        </div>
        )
    }

    return (
        <>
        
        <div className="bg-gray-100 min-h-screen flex flex-col p-10 rounded-lg shadow-2xl w-30">
        <h2 className="text-4xl font-extrabold text-start mb-6">
            <Link to='/'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500" >Table.io</span>
            </Link> 
        </h2>
        
        <div className="overflow-x-auto">
        <table className="min-w-full">
            <thead>
            <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                ID
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Email
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Birthday Date
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Phone Number
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Address
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Options
                </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {currentData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {editableData[item.id] ? (
                    <input
                      type="text"
                      value={updatedData[item.id]?.name || item.name}
                      onChange={(e) => handleChange(item.id, "name", e.target.value)}
                    />
                  ) : (
                    item.name || "-"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                {editableData[item.id] ? (
                    <input
                      type="text"
                      value={updatedData[item.id]?.email || item.email}
                      onChange={(e) => handleChange(item.id, "email", e.target.value)}
                    />
                  ) : (
                    item.email || "-"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                {editableData[item.id] ? (
                    <input
                      type="text"
                      value={updatedData[item.id]?.birthday_date || item.birthday_date}
                      onChange={(e) => handleChange(item.id, "birthday_date", e.target.value)}
                    />
                  ) : (
                    item.birthday_date || "-"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                {editableData[item.id] ? (
                    <input
                      type="text"
                      value={updatedData[item.id]?.phone_number || item.phone_number}
                      onChange={(e) => handleChange(item.id, "phone_number", e.target.value)}
                    />
                  ) : (
                    item.phone_number || "-"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                {editableData[item.id] ? (
                    <input
                      type="text"
                      value={updatedData[item.id]?.address || item.address}
                      onChange={(e) => handleChange(item.id, "address", e.target.value)}
                    />
                  ) : (
                    item.address || "-"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                  {editableData[item.id] ? (
                    <button
                      onClick={() => handleSave(item.id)}
                      className="bg-blue-500 text-white py-1 px-2 rounded transition ease-in-out delay-150 hover:scale-110 hover:bg-green-500 duration-300"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded transition ease-in-out delay-150 hover:bg-red-300 hover:scale-125 duration-300"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(testUsersData.length / perPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 py-2 px-4 rounded  ${
              currentPage === index + 1 ? "bg-blue-500 text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 " : "bg-gray-300 text-gray-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <p className="text-center font-normal text-gray-500 mt-12">If error occured or for any other questions please</p>
        <h2 className="text-2xl font-extrabold text-center mt-3 mb-6">
              <Link to='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'>
                  <span className="bg-clip-text motion-safe:animate-spin text-transparent bg-gradient-to-r from-blue-500 to-red-500" >Contact Us</span>
              </Link> 
          </h2>
      </div>
    </div>
    </>
    );
};



export default TableView;
