
function Card2({
  title = "-",
  
  img = "https://media.istockphoto.com/id/1135220152/photo/asphalt-road-ground-and-green-woods-in-the-countryside-nature-park.jpg?s=612x612&w=0&k=20&c=DPemFmdiNn-OO3BwSmuV9nkuhh3_DYAhUSIp32fzwAE=",
  onPress,
}) {
  return (
<div   onClick={onPress}  className="cursor-pointer max-w-80 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  >

    <img  className="rounded-t-lg h-36 w-screen" src={img} alt="" />

  <div className="p-5">
   
      <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

    <p className=" font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
  </div>
</div>


  );
}

export default Card2;