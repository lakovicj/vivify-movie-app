import React, { useState } from 'react';

function MovieForm({addMovie}) {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newMovie = {
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl
        }
        console.log(newMovie);
        addMovie(newMovie);
        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setSubtitle("");
        setDescription("");
        setImageUrl("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    required
                    type="text"
                    name="title"
                    placeholder="Title.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <br />
                <input 
                    required
                    type="text"
                    name="subtitle"
                    placeholder="Subtitle..."
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />
                <br />
                <textarea 
                    required
                    name="description"
                    placeholder="Description..."
                    rows="8"
                    cols="30"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <br />
                <input 
                    required
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <br />
                <button>Add Movie</button>
            </form>
        </div>
    )
}



export default MovieForm;