import { faBookmark, faCommentDots, faEllipsisH, faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './../../shared/models/menu-item.model';
export const MENU: MenuItem[] = [
    {
        name: "home",
        route: "dashboard",
        icon: faHouseUser
    },
    {
        name: "messages",
        route: "messages",
        icon: faCommentDots
    },
    {
        name: "profile",
        route: "profile",
        icon: faUser,
    },
    {
        name: "saved post",
        route: "saved",
        icon: faBookmark
    },
    {
        name: "settings",
        route: "settings",
        icon: faEllipsisH
    },
]