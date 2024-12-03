import { FaEye, FaPen,  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const CoffeeCard = ({coffee}) => {
      const {photo,name,chef,supplier}  = coffee 
      console.log(coffee);
      
      return (
            <div className=" flex justify-between px-4 py-2 gap-2 items-center bg-[#f0ba8848] w-full h-full rounded">
                  <img className=" w-40 object-contain h-52" src={photo} alt="" />
                  <div className=" text-lg">
                        <p>Name : {name}</p>
                        <p>Chef: {supplier}</p>
                        <p>Price : Rs{chef}</p>
                  </div>
                  <div className=" text-2xl  flex flex-col gap-6">
                        <span><FaEye></FaEye></span>
                        <span><FaPen></FaPen></span>
                        <span><MdDelete></MdDelete></span>
                  </div>
            </div>
      );
};

export default CoffeeCard;