import { useState } from "react";

const Step1 = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [contactNo, setContactNo] = useState(0);
  let [city, setCity] = useState("");
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
            id="name"
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
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
            id="name"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            id="name"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            id="name"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
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
            id="name"
            type="number"
            placeholder="Contact Number"
            value={contactNo}
            onChange={(e) => {
              setContactNo(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
