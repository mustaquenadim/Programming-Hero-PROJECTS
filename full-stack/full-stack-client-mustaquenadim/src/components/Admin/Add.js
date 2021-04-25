import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Edit = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const handleUploadFile = event => {
        const imageData = new FormData();
        imageData.set('key', '4baca7c9339f40fbf6e854ee58ca892d');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(response => setImageURL(response.data.data.display_url))
        .catch(error => console.log(error));
    }

    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://apple-shortcake-30747.herokuapp.com/addBook`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log(res))
    };
    return (
        <div className='container'>
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-info p-3 rounded-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Book Name</label>
                            <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter Book Name" ref={register}/>                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name="author" id="author" placeholder="Enter Author Name" ref={register}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Book Price</label>
                            <input type="text" className="form-control" name="price" id="price" aria-describedby="emailHelp" placeholder="Enter Book Price" ref={register}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="bookCoverPhoto" className="form-label">Add Book Cover Photo</label>
                            <input type="file" className="form-control" onChange={handleUploadFile} id="bookCoverPhoto" placeholder="Upload Photo"/>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Edit;