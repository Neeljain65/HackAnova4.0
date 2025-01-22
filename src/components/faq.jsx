"use client"
import { ArrowDownRight } from "lucide-react"
import { useState } from "react"

function Faq({ question, answer, isActive, handleClick  }) {
	return (
		<button
			onClick={handleClick}
			className={`text-start rounded-3xl transition-all duration-300 px-4 lg:px-8 pt-2 
				  ${
				isActive
					? `bg-black text-white pb-4 `
					: `bg-[#EBEBEB] pb-2 `
			}`}
		>
			<div className="flex justify-between items-center w-full rounded-3xl">
				<p className={`w-4/5 lg:text-xl  font-bold ${isActive?"text-white":"text-slate-900"} transition-colors duration-300`}>{question}</p>
				<div className="size-14 grid place-items-center bg-white rounded-full text-[#030F40]">
					<ArrowDownRight
						className={`transition-transform duration-300 ${
							isActive ? "-rotate-90" : "rotate-0"
						}`}
					/>
				</div>
			</div>
			<div
				className={`grid transition-[grid-template-rows] duration-300 ${
					isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}
			>
				<div className="overflow-hidden">
					<p className="py-4 lg:py-6 text-sm lg:text-base leading-snug">
						{answer}
					</p>
				</div>
			</div>
		</button>
	)
}

export function FaqTeachers({ faqs}) {
	const [active, setActive] = useState(null)

	return (
		<div className="mt-8 grid lg:grid-cols-2 gap-6">
			{faqs.map((item, i) => (
				<Faq
					key={i}
					question={item.question}
					answer={item.answer}
					isActive={active === i}
					handleClick={() =>
						active === i ? setActive(null) : setActive(i)
					}
					
				/>
			))}
		</div>
	)
}
