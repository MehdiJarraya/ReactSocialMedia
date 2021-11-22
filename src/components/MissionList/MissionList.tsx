import * as React from 'react';
import { FbPostMission, GetMissionsQuery, IgStoryMission } from '../../generated/graphql';
import { groupBy } from '../../utils';
import MissionItem from '../MisssionItem';
import './styles.css';
import { useAppSelector } from '../../hooks';

interface Props {
  data: GetMissionsQuery;
}


const MissionList: React.FC<Props> = ({ data }) => {

  React.useEffect(() => {
    const title = document.getElementById('title') as HTMLMetaElement;
    const image = document.getElementById('image') as HTMLMetaElement;
    let lastMission = data.getFeed.items[data.getFeed.items.length - 1]
    title.content = lastMission.title
    if ("image" in lastMission) {
      image.content = lastMission.image.src
    }
  }, [data]);

  const language = useAppSelector(state => state.preference.language)

  if (!data.getFeed.items) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {Object.keys(groupBy(data.getFeed.items, i => i.date)).map(key =>
        <div key={key}>
          {/* es-GT */}
          <p className="date">{`${new Date(key).getDay()}  ${new Date(key).toLocaleDateString(language || "", { month: 'long' })} ${new Date(key).getFullYear()} `}  </p>
          {groupBy(data.getFeed.items, i => i.date)[key].map((item: FbPostMission | IgStoryMission, index) =>
            <MissionItem key={index} {...item} />
          )}
        </div>
      )}
    </div >
  );
};

export default MissionList;