import React from 'react'
import "./sidebar.css"
import {Chat, Group,  GroupAdd,  RssFeed} from '@material-ui/icons'
import {Users} from '../../dummyData'
import Friends from '../friends/Friends'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Clubs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupAdd className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Find Friends
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u=>{
                        return <Friends user = {u} key = {u.id} />
                    })}
                </ul>
            </div>
        </div>
    )
}
