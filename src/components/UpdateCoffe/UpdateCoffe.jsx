import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffe = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updateCoffee)

        // update korar jonno client site er code
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <Link className='px-2 text-green-500 font-bold' to="/addCoffe">AddCoffe</Link>
            <Link className='px-2 text-green-500 font-bold' to="/">Home</Link>
            <h2 className='text-4xl font-bold text-purple-600 my-4'>Update Coffe House</h2>
            <form onSubmit={handleUpdateCoffe} className='bg-gray-500 py-10 rounded-xl'>
            <h4 className='text-2xl font-bold text-purple-800'>Update Coffee: {name}</h4>
                <div className='p-4'>
                
                    <div>
                        <input type="text" name='name' defaultValue={name} placeholder="Coffe Name" className="input input-bordered input-primary mx-2 w-full max-w-xs" />
                        
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="available quantity" className="input input-bordered mb-3 input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Coffe supplier" className="input input-bordered input-primary mx-2 w-full max-w-xs" />

                        <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered mb-3 input-primary w-full max-w-xs" />
                    </div>

                    <div>
                        <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered input-primary mx-2 w-full max-w-xs" />

                        <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered input-primary mb-3 w-full max-w-xs" />
                    </div>
                    <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered input-primary ml-2 w-[650px]" />

                    <input type="submit" className='input-bordered bg-orange-600 py-2 mt-3 font-bold text-white input-primary w-[650px]' value="Add Coffe" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffe;