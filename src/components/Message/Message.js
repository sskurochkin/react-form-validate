import React from 'react';
import './message.scss'

const Message = (props) => {
	return (
		<div className='message'>
			<p>{props.message}</p>
			<span
				className='close'
				onClick={()=>props.close()}>
				X</span>
		</div>
	);
};

export default Message;