import React from 'react';
import Dashboard from '../../pages/dashboard/index';
import { getUser, logout } from "../../services/auth";

export default (props) => {
    const logoutUser = () => {
        logout();
        props.history.push("/login");
    }

    return <Dashboard 
        user={getUser()} 
        github={'https://google.com.br'} 
        languages={'Praesent id tempus lorem, vitae hendrerit mauris. Aliquam pulvinar mauris vitae velit porttitor placerat lacinia non diam. Cras nec sapien id nunc luctus interdum. Mauris non maximus turpis. Phasellus pretium, neque non semper aliquam, odio dui fringilla quam, eu dictum neque nibh eu erat. Nam posuere mauris et laoreet lobortis. Nam finibus urna quis turpis convallis, ac eleifend elit vestibulum. Etiam at turpis in felis interdum condimentum sed nec mi. In et augue nulla. Sed vestibulum turpis sit amet justo dictum, volutpat maximus dui lacinia. Proin pulvinar aliquam neque sed elementum. Nullam cursus, sapien sit amet molestie interdum, ligula nunc auctor dui, eget consequat mi lectus et sem. Sed id nisl ut eros scelerisque dignissim quis vitae nibh. Pellentesque vel lectus scelerisque arcu accumsan gravida. Aenean sapien libero, dictum non condimentum ac, porta placerat odio. Praesent a interdum orci, ac pellentesque nunc.'} 
        logout={() => logoutUser()} />
}