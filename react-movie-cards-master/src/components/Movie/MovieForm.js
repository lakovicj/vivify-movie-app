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
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label>Title</label>
                    <input className="form-control"
                        autoFocus
                        required
                        type="text"
                        name="title"
                        placeholder="Title.."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>

                <div className="form-group" >
                    <label>Subtitle</label>
                    <input 
                        className="form-control"
                        required
                        type="text"
                        name="subtitle"
                        placeholder="Subtitle..."
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </div>

                <div className="form-group" >
                    <label>Description</label>
                    <textarea 
                        className="form-control"
                        required
                        name="description"
                        placeholder="Description..."
                        rows="8"
                        cols="30"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input 
                        className="form-control"
                        required
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL..."
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>

                <button className="btn btn-success">Add Movie</button>
            </form>
        </div>
    )
}



export default MovieForm;