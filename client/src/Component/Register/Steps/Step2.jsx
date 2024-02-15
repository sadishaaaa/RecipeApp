import React, { useContext } from "react";
import { StepperContext } from "../../../Contexts/StepperContext";
const Step2 = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      try {
        const updatedUserData = { ...userData };
        // Set up FormData for the file upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Images");
        formData.append("cloud_name", "daxihhqqp");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/daxihhqqp/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        // Parse the Cloudinary response
        const data = await response.json();
        console.log(data);
        // Update the copy of userData with the Cloudinary URL
        updatedUserData[name] = data.secure_url;
        // Update the state with the new userData
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
      }
    } else {
      // Handle the case when the user clears the file input
      setUserData({ ...userData, [name]: null });
    }
  };

  return (
    <div className="flex flex-col">
      <form className=" border-gray-200 border-2  rounded p-10">
        <div className="mb-4">
          <label
            htmlFor="coverPhoto"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Cover Picture:
          </label>
          <input
            id="coverPhoto"
            name="coverPhoto"
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="profilePhoto"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Profile Picture:
          </label>
          <input
            id="profilePhoto"
            name="profilePhoto"
            type="file"
            placeholder="profilePhoto"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Bio:
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            cols="50"
            placeholder="Write about yourself"
            value={userData["bio" || ""]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="instagram"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Instagram:
          </label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            placeholder="Instagram link"
            value={userData["instagram" || ""]}
            onChange={handleChange}
            className="mb-4 p-2 w-full border rounded-md"
          />
          <label
            htmlFor="tiktok"
            className="block text-md font-medium pb-2 text-gray-600"
          >
            Tiktok:
          </label>
          <input
            id="tiktok"
            name="tiktok"
            type="text"
            placeholder="Tiktok link"
            value={userData["tiktok" || ""]}
            onChange={handleChange}
            className="mb-4 p-2 w-full border rounded-md"
          />
          <label
            htmlFor="youtube"
            className="block text-md font-medium pb-2 text-gray-600"
          >
            Youtube:
          </label>
          <input
            id="youtube"
            name="youtube"
            type="text"
            placeholder="Youtube link"
            value={userData["youtube" || ""]}
            onChange={handleChange}
            className="mb-4 p-2 w-full border rounded-md"
          />
          <label
            htmlFor="additional"
            className="block text-md font-medium pb-2 text-gray-600"
          >
            Additional:
          </label>
          <input
            id="additional"
            name="additional"
            type="text"
            placeholder="Additional link"
            value={userData["additional" || ""]}
            onChange={handleChange}
            className=" p-2 w-full border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
export default Step2;
