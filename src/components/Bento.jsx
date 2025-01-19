import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { LoremIpsum } from "react-lorem-ipsum"
// Assuming you have a `data.js` file
import "./style.css"
import { items } from "../lib/data";

function Card({ id, title, category, theme, onClick, component }) {
	return (
	  <li className={`card ${theme}`} onClick={() => onClick(id)}>
		<div className="card-content-container">
		  <motion.div
			className="card-content"
			layoutId={`card-container-${id}`}
		  >
			{component ? (
			  <motion.div className="custom-component-container">
				{component()}
			  </motion.div>
			) : (
			  <motion.div
				className="card-image-container"
				layoutId={`card-image-container-${id}`}
			  >
				<img
				  className="size-full object-cover object-center"
				  src={`images/${id}.jpg`}
				  alt=""
				/>
			  </motion.div>
			)}
			<motion.div
			  className="title-container"
			  layoutId={`title-container-${id}`}
			>
			  <span className="category">{category}</span>
			  <h2>{title}</h2>
			</motion.div>
		  </motion.div>
		</div>
	  </li>
	);
  }
  

function List({ selectedId, onSelect }) {
	return (
		<ul className="card-list">
			{items.map((card) => (
				<Card
					key={card.id}
					{...card}
					onClick={onSelect}
					isSelected={card.id === selectedId}
				/>
			))}
		</ul>
	)
}

function Item({ id, onClose }) {
	const { category, title, component } = items.find((item) => item.id === id);
  
	return (
	  <>
		<motion.div
		  initial={{ opacity: 0 }}
		  animate={{ opacity: 1 }}
		  exit={{ opacity: 0 }}
		  transition={{ duration: 0.2, delay: 0.1 }}
		  style={{ pointerEvents: "auto" }}
		  className="overlay"
		  onClick={onClose}
		/>
		<div className="card-content-container open">
		  <motion.div
			className="card-content"
			layoutId={`card-container-${id}`}
		  >
			{component ? (
			  <motion.div className="custom-component-container">
				{component()}
			  </motion.div>
			) : (
			  <motion.div
				className="card-image-container"
				layoutId={`card-image-container-${id}`}
			  >
				<img
				  className="size-full bg-cover bg-center"
				  src={`images/${id}.jpg`}
				  alt=""
				/>
			  </motion.div>
			)}
			<motion.div
			  className="title-container"
			  layoutId={`title-container-${id}`}
			>
			  <span className="category">{category}</span>
			  <h2>{title}</h2>
			</motion.div>
		  </motion.div>
		</div>
	  </>
	);
  }
  
export default function CardGallery() {
	const [selectedId, setSelectedId] = useState(null)

	const handleSelect = (id) => {
		setSelectedId(id)
	}

	const handleClose = () => {
		setSelectedId(null)
	}

	return (
		<div className="container z-10 relative before:absolute before:bg-gradient-to-b from-purple-600 via-purple-950 to-black  before:-inset-2 before:-z-10 before:blur-3xl before:round-[inherit]">
			<List selectedId={selectedId} onSelect={handleSelect} />
			<AnimatePresence>
				{selectedId && (
					<Item id={selectedId} key="item" onClose={handleClose} />
				)}
			</AnimatePresence>
		</div>
	)
}
