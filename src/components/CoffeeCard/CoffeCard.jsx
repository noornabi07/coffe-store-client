import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, details, supplier, quantity, taste } = coffee;


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // delete korar jonno specific id dhore fetch kore ber korar code
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <figure><img className='h-72 mr-3' src={coffee.photo} alt="Movie" /></figure>
                <div className="text-left gap-4 items-center flex justify-between">
                    <div>
                        <h2 className='card-title text-green-600'>{name}</h2>
                        <h2 className='card-title text-green-600'><span className='font-bold text-green-500'>Supplier:</span> {supplier}</h2>
                        <p><span className='font-bold text-green-500'>Details:</span> {details}</p>
                        <p><span className='font-bold text-green-500'>Quantity:</span> {quantity}</p>
                        <p><span className='font-bold text-green-500'>Taste:</span> {taste}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <div className="btn-group btn-group-vertical space-y-3">
                            <button className="btn">View</button>
                            <Link to={`/updateCoffe/${_id}`}>
                                <button className="btn">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;