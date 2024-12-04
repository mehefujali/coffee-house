import { useContext } from "react";
import { FaEye, FaPen, } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";
import { signalContext } from "../../context/SignalProvider";

const CoffeeCard = ({ coffee }) => {
      const { photo, name, chef, supplier } = coffee
      const {setSignal} = useContext(signalContext)

      const handleDeleteCoffee = () => {
            swal({
                  title: "Are you sure?",
                  text: "Once deleted, you will not be able to recover this imaginary file!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
            })
                  .then((willDelete) => {
                        if (willDelete) {
                              fetch(`http://localhost:5000/coffee/${coffee._id}` , {
                                    method: 'DELETE'
                              })
                                    .then(res => res.json())
                                    .then(data => {
                                          console.log(data);
                                          
                                          if (data.deletedCount) {
                                                setSignal(Math.random)
                                                swal("Your coffee is deleted !", {
                                                      icon: "success",
                                                });
                                                
                                          }
                                    })
                        } else {
                              return
                        }
                  });
                 
                  
      }

      return (
            <div className=" flex justify-between px-4 py-2 gap-2 items-center bg-[#f0ba8848] w-full h-full rounded">
                  <img className=" w-40 object-contain h-52" src={photo} alt="" />
                  <div className=" text-lg">
                        <p>Name : {name}</p>
                        <p>Chef: {supplier}</p>
                        <p>Price : Rs.{chef}</p>
                  </div>
                  <div className=" text-xl  flex flex-col gap-6">
                        <span className=" cursor-pointer btn rounded-full bg-white p-2 text-primary-color"><FaEye></FaEye></span>
                        <span className=" cursor-pointer btn rounded-full bg-white p-2 text-primary-color"><FaPen></FaPen></span>
                        <span className=" cursor-pointer btn rounded-full bg-white p-2 text-primary-color" onClick={handleDeleteCoffee}><MdDelete></MdDelete></span>
                  </div>
            </div>
      );
};

export default CoffeeCard;