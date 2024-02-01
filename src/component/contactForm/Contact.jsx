import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    const [showData, setShowData] = useState(null);
    const { showId } = useParams();
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
        <div>
            <section class="">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Book the Show</h2>

                    <form action="#" class="space-y-8">
                        <div>
                            <label htmlFor="showName" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Show Name
                            </label>
                            <input type="text" id="showName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" readOnly placeholder={showData ? ` ${showData.name}` : ''} required />
                        </div>
                        <div>
                            <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Language
                            </label>
                            <input type="text" id="language" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" readOnly placeholder={showData ? ` ${showData.language}` : ''} required />
                        </div>
                        <div>
                            <label htmlFor="runtime" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Runtime
                            </label>
                            <input type="text" id="runtime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" readOnly placeholder={showData ? ` ${showData.runtime}` : ''} required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="manish@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">No of People</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how many people want to watch the show" required />
                        </div>
                        <div>
                            <label for="card" class="block mb-2 text-sm font-medium text-gray-900 ">Card Number</label>
                            <input type="email" id="card" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter the Card Number" required />
                        </div>
                        
                        <button type="submit" class="p-2 border-2 rounded-lg font-medium font-serif text-xl px-6 bg-blue-500 flex justify-center items-center mx-auto">Pay Now</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
