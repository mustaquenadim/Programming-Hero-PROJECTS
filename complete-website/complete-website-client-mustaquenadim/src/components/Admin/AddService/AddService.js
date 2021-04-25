import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AdminDash from '../SideNav/AdminDash';

const AddService = () => {
    const {register, handleSubmit} = useForm();

    const [imageURL, setImageURL] = useState(null);
    const handleUploadFile = (event) => {
        const imageData = new FormData();
        imageData.set('key', '4baca7c9339f40fbf6e854ee58ca892d');
        imageData.append('image', event.target.files[0]);
        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => setImageURL(response.data.data.display_url))
            .catch((error) => console.log(error));
    };

    const onSubmit = (data) => {
        const serviceData = { title: data.title, imageURL: imageURL, description: data.description, price: data.price,};
        const url = `https://protected-badlands-54605.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        }).then((result) => {
            if(result) {
                alert('Service added successfully!')
            }
        });
    };

    return (
        <div className='row'>
            <AdminDash></AdminDash>
            <div className='col-lg-9 bg-light'>
                <div className='container'>
                    <h2>Add Service</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-3 rounded-3'>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'>Service Title</label>
                                    <input type='text' className='form-control' name='title' id='title' placeholder='Enter title' {...register('title')}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label htmlFor='serviceCoverPhoto' className='form-label'>Image</label>
                                    <input type='file' className='form-control' onChange={handleUploadFile} id='serviceCoverPhoto' placeholder='Upload image' {...register}/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label htmlFor='price' className='form-label'> Description</label>
                                    <input type='text' className='form-control' name='description' id='description' placeholder='Enter Description' {...register('description')}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label htmlFor='price' className='form-label'>Service Price</label>
                                    <input type='text' className='form-control' name='price' id='price' placeholder='Enter Book Price' {...register('price')}/>
                                </div>
                            </div>
                        </div>
                        <input type='submit' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
