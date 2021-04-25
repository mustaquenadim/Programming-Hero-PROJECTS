import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import UserDash from '../UserDash';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const newReview = {
            ...loggedInUser,
            name: data.name,
            company: data.company,
            review: data.comment,
        };
        const url = 'https://protected-badlands-54605.herokuapp.com/addReview';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview),
        }).then((res) => {
            console.log(res);
            alert('Review added successfully!');
        });
    };
    return (
        <div className='row'>
            <UserDash></UserDash>
            <div className='col-lg-9'>
                <h1>Review</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='p-3 rounded-3'
                >
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                id='name'
                                placeholder='Your Name'
                                defaultValue={loggedInUser.username}
                                {...register('name')}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                name='company'
                                id='company'
                                placeholder="Company's name, Designation"
                                {...register('company')}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                name='comment'
                                id='comment'
                                placeholder='Comment'
                                {...register('comment')}
                            />
                        </div>
                    </div>
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default Review;
