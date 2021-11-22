import React, { useEffect } from 'react';
import { useGetMissionsQuery } from '../../generated/graphql';
import InfiniteScroll from '../InfiniteScroll';
import MissionList from './MissionList';
import './styles.css';
import { useLocalStorage } from '../../hooks';

export interface OwnProps {
  id: number
}
const MissionListContainer: React.FC = () => {
  // en-emodeng  es-GT
  const [currentLanguage, setCurrentLanguage]=useLocalStorage("language")

  const { data, loading, fetchMore } = useGetMissionsQuery({
    variables: {
      feedInput: { offset: 0, limit: 4 }
    }
  });

  const loadMoreNumbers = () => {
    fetchMore({
      variables: {
        feedInput: { offset: data?.getFeed.items.length, limit: 4 },
        offset: data?.getFeed.items.length
      },
    });
  };


  useEffect(() => {
    setCurrentLanguage("en-emodeng")
  }, [])
  
  useEffect(() => {
    console.log("use Effect data changed", data);

  }, [data])

  if (!data) {
    return <div>No data</div>;
  }
  return (
    <>
      <button className={`button ${currentLanguage==="en-emodeng" &&"actif"}`} onClick={()=>{setCurrentLanguage("en-emodeng")}} >English</button>
      <button className={`button ${currentLanguage==="es-GT" &&"actif"}`} onClick={()=>{setCurrentLanguage("es-GT")}}>Spanish</button>
      <InfiniteScroll
        hasMoreData={data?.getFeed.hasNextPage || false}
        isLoading={loading}
        onBottomHit={loadMoreNumbers}
        loadOnMount={false}
      >
        <MissionList data={data} />;
      </InfiniteScroll>
    </>
  )

};

export default MissionListContainer;



