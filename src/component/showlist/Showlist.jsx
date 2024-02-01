
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(response.data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };

        fetchShows();
    }, []);

    const redirectToSummary = (showId) => {
        navigate(`/summary/${showId}`);
    };

    return (
        <div>
            <h1 className='text-5xl flex font-bold justify-center items-center m-10'>Show List</h1>
            <div className='flex flex-wrap'>
                {shows.map((show) => (

                    <div key={show.show.id} className='flex justify-center items-center flex-wrap  border-2 border-black mb-10 w-2/5 mx-auto  gap-10 h-[250px] font-serif shadow-md'>
                        <div>
                            {show.show.image && show.show.image.original ? (
                                <img src={show.show.image.original} alt={show.show.name} className='w-40' />
                            ) : (
                                <div className='blank-box' style={{ width: '200px', height: '200px', backgroundColor: '#ccc' }}>
                                   
                                </div>
                            )}
                        </div>

                        <div>
                            <h2 className='font-bold md:text-3xl '> {show.show.name}</h2>
                            <div className='flex gap-5 font-medium'>
                                <p>{show.show.type}</p>
                                <p>{show.show.language}</p>
                            </div>
                            <div className='flex gap-2 font-medium'>
                                <p>Schedule: </p>
                                <p>{show.show.schedule.time} at</p>
                                <p>{show.show.schedule.days}</p>
                            </div>
                            <div className='flex gap-5 font-medium'>
                                <p>Average Rating : {show.show.rating.average}</p>
                            </div>
                            <div>
                                <p>Runtime: {show.show.runtime} minutes</p>
                            </div>
                            <div className='flex gap-5 font-medium'>
                                <p>IMDB Rating : {show.show.externals.imdb}</p>
                            </div>
                            <button onClick={() => redirectToSummary(show.show.id)} className='bg-green-200 p-2 border-2 border-green-100 rounded-full hover:bg-green-500 mt-4'>Show Summary</button>
                        </div>




                    </div>
                ))}
            </div>

        </div>
    );
};

export default ShowList;
