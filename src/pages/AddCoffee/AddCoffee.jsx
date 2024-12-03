import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const AddCoffee = () => {
      const handleAddCoffee = (e) => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value
            const chef = form.chef.value
            const supplier = form.supplier.value
            const taste = form.chef.value
            const category = form.category.value
            const details = form.details.value
            const photo = form.photo.value
            const coffee = {
                  name,
                  chef,
                  supplier,
                  taste,
                  category,
                  details,
                  photo,

            }
            fetch('http://localhost:5000/coffee', {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(coffee)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId){
                              alert("coffee added")
                        }
            })

      }
      return (
            <div>
                  <div className=" container mx-auto mt-2">
                        <div className="my-8">
                              <Link to={'/home'} className=" flex w-fit gap-2 items-center text-2xl"> <FaArrowLeft></FaArrowLeft> <h2 className=" font-rancho-regular">Back to home</h2></Link>
                        </div>
                        <div className=" md:w-8/12 mx-auto bg-primary-color bg-opacity-10 p-16 rounded">
                              <div>
                                    <h1 className=" text-4xl mb-4 text-center font-bold font-rancho-regular">Add new coffee</h1>
                                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                              </div>
                              <form onSubmit={handleAddCoffee} className=" grid grid-cols-12 gap-4">
                                    <label className=" col-span-6" >
                                          <p>Name</p>
                                          <input className=" w-full p-2 rounded" type="text" placeholder="Enter Coffee name" name="name" id="" />
                                    </label>
                                    <label className=" col-span-6">
                                          <p>Chef</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter coffee chef" name="chef" id="" />
                                    </label>
                                    <label className=" col-span-6">
                                          <p>Supplier</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter coffee supplier" name="supplier" id="" />
                                    </label>
                                    <label className=" col-span-6">
                                          <p>Taste</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter coffee taste" name="taste" id="" />
                                    </label>
                                    <label className=" col-span-6">
                                          <p>Category</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter coffee category" name="category" id="" />
                                    </label>
                                    <label className=" col-span-6">
                                          <p>Details</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter coffee details" name="details" id="" />
                                    </label>
                                    <label className=" col-span-12">
                                          <p>Photo</p>
                                          <input className="w-full p-2 rounded" type="text" placeholder="Enter photo URL" name="photo" id="" />
                                    </label>
                                    <input className=" col-span-12 bg-primary-color bg-opacity-40 border-primary-color border-2 p-2 rounded text-white font-rancho-regular active:scale-95 duration-75 cursor-pointer text-lg" type="submit" name="" id="" value={'Add coffee'} />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default AddCoffee;