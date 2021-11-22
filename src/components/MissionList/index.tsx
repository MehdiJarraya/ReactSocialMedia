import React from 'react';
import { useGetMissionsQuery } from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAng, setSpanich } from "../../store/Slice";
import InfiniteScroll from '../InfiniteScroll';
import MissionList from './MissionList';
import './styles.css';

export interface OwnProps {
  id: number
}
const MissionListContainer: React.FC = () => {

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
  // The `state` arg is correctly typed as `RootState` already
  const language = useAppSelector(state => state.preference.language)
  const dispatch = useAppDispatch()



  if (!data) {
    return <div>No data</div>;
  }
  return (
    <>
      <button className={`button ${language==="en-emodeng" &&"actif"}`} onClick={()=>{dispatch(setAng())}} >English</button>
      <button className={`button ${language==="es-GT" &&"actif"}`} onClick={()=>{dispatch(setSpanich())}}>Spanish</button>
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



