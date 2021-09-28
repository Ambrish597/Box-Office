import React from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {

    const { id } = useParams();

    const {show, isLoading, error}=useShow(id);

    console.log(show);

    if(isLoading)
    {
        return <div>The Data is Loading...</div>
    }
    if(error)
    {
        return <div>Error Occurred {error}</div>
    }
    return (
        <ShowPageWrapper>
            <ShowMainData 
            image={show.image} 
            name={show.name} 
            rating={show.rating} 
            summary={show.summary} 
            tags={show.genres} 
            />

            <InfoBlock>
                <h2>Details</h2>
                <Details 
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons 
                    seasons={show._embedded.seasons}                    
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast 
                    cast={show._embedded.cast}
                />
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show
