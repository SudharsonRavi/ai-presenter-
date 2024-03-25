

// eslint-disable-next-line react/prop-types
export const Button = ({label, handle,topic}) => {
  const handleClick = () => {
    handle({ topic });
  };
 console.log("button")
 console.log(topic)
  return (
    <button className=' flex justify-center items-center gap-2 px-7 py-4 rounded-[25px] bg-pink-600 text-center text-white font-bold ' onClick={handleClick} >
      {label}
    </button>
  )
}
