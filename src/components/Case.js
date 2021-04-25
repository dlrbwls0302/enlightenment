import React from 'react';
import '../styles/Case.css';

const Case = ({name, number, title, date}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{title}</td>
            <td>{date}</td>
        </tr>
    );
};

export default Case;