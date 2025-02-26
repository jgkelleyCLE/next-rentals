import tw from 'tailwind-styled-components'

import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

export const OrangeButton = tw.button`
bg-safariOrange 
hover:bg-safariOrangeHover 
p-2
px-6
rounded-md 
text-white 
transition 
duration-300
mt-4
font-bold
`

export const OrangeTrigger = tw.div`
    bg-safariOrange 
hover:bg-safariOrangeHover 
p-2
px-6
rounded-md 
text-white 
transition 
duration-300
mt-1
font-bold
`

export const CartCard = tw.div`
    flex 
    items-center 
    justify-between 
    p-2 
    shadow-md 
    shadow-black/20
    dark:bg-gray-800
    bg-gray-100
    w-full 
    rounded-md 
    my-2
`

export const QuantityContainer = tw.div`
    flex 
    items-center 
    gap-2
`

export const MinusIcon = tw(FiMinusCircle)`
    cursor-pointer
    text-xl
`

export const PlusIcon = tw(FiPlusCircle)`
    cursor-pointer
    text-xl
`