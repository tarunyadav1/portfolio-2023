import React from 'react'

// .card {
//     max-width: 300px;
//     min-height: 200px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     max-width: 500px;
//     height: 300px;
//     padding: 35px;

//     border: 1px solid rgba(255, 255, 255, .25);
//     border-radius: 20px;
//     background-color: rgba(255, 255, 255, 0.45);
//     box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

//     backdrop-filter: blur(15px);
//   }

const Card = ({ children }) => {
	return (
		<div className="h-full w-full hover:bg-gray-0 rounded-md bg-clip-padding hover:backdrop-filter hover:backdrop-blur-3xl bg-opacity-100 hover:border-[1px] border-gray-100">
			{children}
		</div>
	)
}

export default Card
