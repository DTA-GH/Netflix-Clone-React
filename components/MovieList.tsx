import React from 'react';

import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}

// MovieList component takes from an array of movie data with title as a prop
const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    // Checks to see if array data is empty, if so, returns null indicating no movies are being displayed
    if (isEmpty(data)) {
        return null;             
    }

    // Renders component for each movie in the data array based on a unique ID
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    
                    {data.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;