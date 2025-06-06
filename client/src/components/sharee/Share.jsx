import "./share.scss";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  // Upload to Cloudinary
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "image_upload_preset"); // Make sure to add the upload preset name

      // Send to Cloudinary
      const res = await makeRequest.post(
        "https://api.cloudinary.com/v1_1/dsghil6iz/image/upload",
        formData
      );

      return res.data.secure_url; // Return the secure URL from Cloudinary
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/posts", newPost),
    onSuccess: () => {
      // Invalidate and refetch the posts after mutation
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";

    if (file) {
      // Get the Cloudinary image URL
      imgUrl = await upload();
    }

    // Create a new post with description and image URL
    mutation.mutate({ desc, img: imgUrl });

    // Reset the form after posting
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="share-container">
        <div className="share-top">
          <label htmlFor="file" className="share-top-left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <BiSolidPhotoAlbum className="shareIconPhoto" />
            <span>Add image</span>
          </label>

          <div className="share-top-right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>

        <div className="text-area-wrapper">
          <textarea
            type="text"
            placeholder={`Share your thoughts, ${
              currentUser.name.split(" ")[0]
            }`}
            onChange={(e) => setDesc(e.target.value)}
            className="share_input"
            value={desc}
          />
          <button className="btn-share" onClick={handleClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
