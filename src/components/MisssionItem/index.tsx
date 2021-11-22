import React from 'react';
import { ReactComponent as Fb } from '../../assets/Icons/fb.svg';
import { ReactComponent as Ig } from '../../assets/Icons/ig.svg';
import { FbPostMission, IgStoryMission } from '../../generated/graphql';
import './styles.css';

const MissionItem: React.FC<FbPostMission | IgStoryMission> = (props) => {
    const { title, cashReward, __typename } = props
    const { video } = props as IgStoryMission;
    const { image } = props as FbPostMission;

    return (
        <div className="missionItem">
            {__typename === "FBPostMission" ? <img className="img" alt={image.alt || ""} src={image.src} /> :
                <iframe title={video.alt || video.src} className="video"
                    src={video.src}>
                </iframe>
            }
            <p className="title">{title}</p>
            <div className="rewardCard">
                <span >
                    {__typename === "FBPostMission" ? <Fb /> : <Ig />}
                </span>
                <p className="rewardText">
                    {localStorage.getItem("language")==="en-emodeng"? "Rewards": "Recompensa"}
                </p>
                <p>$ {cashReward}</p>
            </div>

        </div>
    );
}
export default MissionItem
