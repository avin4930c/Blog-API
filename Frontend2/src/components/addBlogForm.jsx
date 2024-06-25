import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    category: yup.string().oneOf(['Tech', 'Food', 'Lifestyle', 'Gaming', 'Fitness', 'Cars', 'Other'], 'Select a valid category').required('Category is required'),
    time_read: yup.number().positive('Time to read must be a positive number').integer('Time to read must be an integer'),
    desc: yup.string().required('Description is required'),
    imgUrl: yup.string().url('Must be a valid URL'),
    content: yup.string().required('Content is required'),
    published: yup.boolean(),
});

const AddBlogForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [serverErrors, setServerErrors] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFileToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'blog_api_preset'); // Use environment variable

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dyi5bnusc/image/upload`, { // Use environment variable
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (response.ok) {
                return data.secure_url;
            } else {
                console.error('Error uploading file:', data.error.message);
                return null;
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };

    const onSubmit = async (data) => {
        if (file) {
            const uploadedUrl = await uploadFileToCloudinary(file);
            if (uploadedUrl) {
                data.imgUrl = uploadedUrl;
            } else {
                setServerErrors([{ msg: 'Failed to upload image' }]);
                return;
            }
        }

        try {
            console.log(data);
            const response = await fetch('http://localhost:3000/blog/addPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                setServerErrors(result.errors);
            } else {
                navigate('/blogs');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <NavBar />
        <section className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Add a New Blog Post</h1>
                <p className="text-gray-600 mb-6">Share your thoughts and insights with our community. Fill out the form below to create a new blog post.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            {...register('title')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title.message}</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            id="category"
                            {...register('category')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a category</option>
                            <option value="Tech">Tech</option>
                            <option value="Food">Food</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Cars">Cars</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category.message}</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="time_read" className="block text-sm font-medium text-gray-700">Time to Read (minutes)</label>
                        <input
                            type="number"
                            id="time_read"
                            {...register('time_read')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.time_read && <p className="text-red-600 text-xs mt-1">{errors.time_read.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="desc"
                            {...register('desc')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.desc && <p className="text-red-600 text-xs mt-1">{errors.desc.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            id="upload"
                            accept = "image/*"
                            onChange={handleFileChange}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">Image URL (2nd priority)</label>
                        <input
                            type="text"
                            id="imgUrl"
                            {...register('imgUrl')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.imgUrl && <p className="text-red-600 text-xs mt-1">{errors.imgUrl.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Blog Content</label>
                        <textarea
                            id="content"
                            {...register('content')}
                            className="mt-1 py-2 px-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.content && <p className="text-red-600 text-xs mt-1">{errors.content.message}</p>}
                    </div>

                    <div className="col-span-6 flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            {...register('published')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Publish Later</label>
                    </div>

                    {serverErrors.length > 0 && (
                        <div className="col-span-6">
                            <ul className="text-red-600 text-xs mt-1">
                                {serverErrors.map((error, index) => (
                                    <li key={index}>{error.msg}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="col-span-6">
                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add Blog Post
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
};

export default AddBlogForm;