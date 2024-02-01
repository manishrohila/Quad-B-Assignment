import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ShowSummary = () => {
    const [showData, setShowData] = useState(null);
    const { showId } = useParams();
    const navigate = useNavigate();
    const bookmyshow=(showId)=>{
        navigate(`/payment-page/${showId}`);
    }
    useEffect(() => {
        const fetchShowData = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
                const result = response.data;
                setShowData(result);
            } catch (error) {
                console.error('Error fetching show data:', error);
            }
        };

        fetchShowData();
    }, [showId]);

    return (
        <div className='mt-16 m-4 '>
            <div>
                {showData ? (

                    <div className='border-4 rounded-md   border-black p-4 max-w-[1100px] mx-auto '>
                        <div>
                            <h2 className='text-5xl flex justify-center font-bold mt-4'>{showData.name}</h2>
                        </div>
                        <div className=' grid md:grid-cols-2 grid-cols-1 mt-8 justify-around '>

                            <div className='flex justify-center self-start mt-4'>
                                {showData.image && showData.image.original ? (
                                    <img src={showData.image.original} alt={showData.name} className='w-[270px] h-[270px] object-fit' />
                                ) : (
                                    <div className='blank-box' style={{ width: '200px', height: '200px', backgroundColor: '#ccc' }}>

                                    </div>
                                )}
                            </div>
                            <div>

                                <div>
                                    <div className='flex gap-2 font-medium mt-6'>
                                        <p className='font-bold'>Network : </p>
                                        <p>{showData.network.name}</p>
                                    </div>
                                </div >
                                <div className='flex gap-2 font-medium '>
                                    <p className='font-bold'>Genres:</p>
                                    <p > {showData.genres.join(' | ')}</p>
                                </div>

                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Schedule: </p>
                                    <p>{showData.schedule.time} at</p>
                                    <p>{showData.schedule.days}</p>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Status: </p>
                                    <p>{showData.status} </p>

                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Show Type : </p>
                                    <p>{showData.type}</p>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Language : </p>
                                    <p>{showData.language}</p>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Average Rating : </p>
                                    <p>{showData.rating.average}</p>
                                </div>
                                <div className='font-medium flex gap-2'>
                                    <p className='font-bold'>Runtime: </p>
                                    <p>{showData.runtime} minutes</p>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>IMDB Rating :</p>
                                    <p> {showData.externals.imdb}</p>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <p className='font-bold'>Official Site :</p>
                                    <a href={showData.officialSite} target="_blank" className='' rel="noopener noreferrer" style={{ color: "blue" }}>
                                        {showData.officialSite}
                                    </a>
                                </div>

                            </div>


                        </div>
                        <div className='flex gap-2 font-medium mt-6'>
                            <p className='font-bold'></p>
                            <div dangerouslySetInnerHTML={{ __html: showData.summary }} />
                        </div>

                        <div className="mt-8 text-3xl   flex justify-center ">
                            <button onClick={()=>bookmyshow(showId)} className='border-2  p-2 rounded-lg shadow-lg font-semibold font-serif bg-[#789461]'>BOOK SHOW</button>
                        </div>

                    </div>

                ) : (
                    <p>Loading...</p>
                )}
            </div>


        </div>
    );
};

export default ShowSummary;
