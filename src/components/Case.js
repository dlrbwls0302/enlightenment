import React from 'react';
import '../styles/Case.css';

const Case = ({name, number, title, date}) => {
    return (
        // <div className='case-item'>
        //     <img className='case-img'  alt='img'/>
        //     <div className='case-title'>
        //         {title}
        //     </div>
        // </div>
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{title}</td>
            <td>{date}</td>
        </tr>
    );
};

export default Case;