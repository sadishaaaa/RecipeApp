import React, { useState } from "react";

const Step2 = () => {
  let [coverPhoto, setCoverPhoto] = useState("");
  let [profilePhoto, setProfilePhoto] = useState("");
  let [bio, setBio] = useState("");
  let [instagramLink, setInstagramLink] = useState("");
  let [tiktokLink, setTiktokLink] = useState("");
  let [youtubeLink, setYoutubeLink] = useState("");
  let [additionalLinks, setAdditionalLinks] = useState("");
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
            type="file"
            placeholder="coverPhoto"
            value={coverPhoto}
            onChange={(e) => {
              setCoverPhoto(e.target.value);
            }}
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
            type="file"
            placeholder="profilePhoto"
            value={profilePhoto}
            onChange={(e) => {
              setProfilePhoto(e.target.value);
            }}
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
            rows="4"
            cols="50"
            placeholder="Write about yourself"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
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
            type="text"
            placeholder="Instagram link"
            value={instagramLink}
            onChange={(e) => {
              setInstagramLink(e.target.value);
            }}
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
            type="text"
            placeholder="Tiktok link"
            value={tiktokLink}
            onChange={(e) => {
              setTiktokLink(e.target.value);
            }}
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
            type="text"
            placeholder="Youtube link"
            value={youtubeLink}
            onChange={(e) => {
              setYoutubeLink(e.target.value);
            }}
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
            type="text"
            placeholder="Additional link"
            value={additionalLinks}
            onChange={(e) => {
              setAdditionalLinks(e.target.value);
            }}
            className=" p-2 w-full border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Step2;
