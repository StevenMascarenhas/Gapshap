import React from 'react';
import {ChannelList, ChannnelListContainer , useChatContext} from 'stream-chat-react';
import {ChannelSearch , TeamChannelList , TeamChannelPreview } from './';
import Cookies from 'universal-cookie';

import GapshapIcon from '../assets/GapshapIcon.png';
import Logout from '../assets/logout.png';

const SideBar= () => (
     <div className="channel-list__sidebar">

          <div className="channel-list__sidebar__icon1">

               <div className="icon1__inner">
                    <img src={GapshapIcon} alt="Gapshap" width="30" />

               </div>

          </div>

           <div className="channel-list__sidebar__icon2">

               <div className="icon2__inner">
                    <img src={Logout} alt="Log Out" width="30" />

               </div>

          </div>
     </div>
);

const CompanyHeader = () => (
          <div className="channel-list__header">
              <p className="channel-list__header__text">
               Gapshap !
               </p>  
          </div>
);

const ChannelListContainer = () => {
     return (
          <>
           <SideBar/>    
           <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listProps)=>(
                     <TeamChannelList
                     {...listProps}
                     type="team"
                     />
                )}
                Preview={(previewProps)=> (
                     <TeamChannelPreview
                     {...previewProps}
                     type="team"

                     />
                )}
                />

               <ChannelList 
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={(listProps)=>(
                     <TeamChannelList
                     {...listProps}
                     type="messaging"
                     />
                )}
                Preview={(previewProps)=> (
                     <TeamChannelPreview
                     {...previewProps}
                     type="messaging"

                     />
                )}
                />
           </div>
          </>
     )
}

export default ChannelListContainer
