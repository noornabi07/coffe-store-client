import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffe = () => {
    const handleAddCoffe = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffe = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffe)

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Link className='px-2 text-green-500 font-bold' to="/">Home</Link>
            <Link className='px-2 text-green-500 font-bold' to="/updateCoffe">UpdateCoffe</Link>
            <h2 className='text-5xl font-bold text-purple-700 my-4'>Add Coffe House</h2>
            <form onSubmit={handleAddCoffe} className='bg-gray-500 py-10 rounded-xl'>
                <div className='p-4'>
                    <div>
                        <input type="text" name='name' placeholder="Coffe Name" className="input input-bordered input-primary mx-2 w-full max-w-xs" />
                        
                        <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered mb-3 input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" name='supplier' placeholder="Coffe supplier" className="input input-bordered input-primary mx-2 w-full max-w-xs" />

                        <input type="text" name='taste' placeholder="Taste" className="input input-bordered mb-3 input-primary w-full max-w-xs" />
                    </div>

                    <div>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered input-primary mx-2 w-full max-w-xs" />

                        <input type="text" name='details' placeholder="Details" className="input input-bordered input-primary mb-3 w-full max-w-xs" />
                    </div>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered input-primary ml-2 w-[650px]" />

                    <input type="submit" className='input-bordered bg-orange-600 py-2 mt-3 font-bold text-white input-primary w-[650px]' value="Add Coffe" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffe;