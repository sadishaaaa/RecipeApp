import { useContext } from "react";
import { StepperContext } from "../../../Contexts/StepperContext";
const Step1 = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // let [username, setUsername] = useState("");
  // let [email, setEmail] = useState("");
  // let [password, setPassword] = useState("");
  // let [contactNo, setContactNo] = useState();
  // let [city, setCity] = useState("");
  return (
    <div className="flex flex-col">
      <form className=" border-gray-200 border-2  rounded p-10">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            UserName:
          </label>
          <input
            id="username"
            type="text"
            placeholder="UserName"
            name="username"
            value={userData["username" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={userData["email" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={userData["password" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            value={userData["city" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNo"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Contact Number:
          </label>
          <input
            id="contactNo"
            name="contactNo"
            type="number"
            placeholder="Contact Number"
            value={userData["contactNo" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
