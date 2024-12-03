import { CiCoffeeCup } from "react-icons/ci";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Home = () => {
      const [coffees,setCoffee] = useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffee(data)
            )
      },[])
      return (
            <div>
                  <Hero></Hero>
                  <div className=" my-12 space-y-3 ">
                        <p className=" text-center text-lg "> --- Sip & Savor ---</p>
                        <h3 className=" text-4xl font-rancho-regular text-center text-primary-color">Our Popular Products</h3>
                        <div className=" flex justify-center">
                        <Link to={'/addcoffee'} className=" flex text-lg p-2 rounded text-white items-center bg-[#866137]">Add coffee <CiCoffeeCup></CiCoffeeCup></Link>
                        </div>
                  </div>
                  <div className=" container mx-auto grid grid-cols-3 gap-6"> 
                            {
                              coffees.map(coffee =>  <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                            }
                  </div>
            </div>
      );
};

export default Home;