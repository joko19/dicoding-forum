import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { Header } from "../components/Header";
import { asyncAddThread } from "../states/thread/action";

function CreateThread() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    if (title && body) {
      dispatch(asyncAddThread({ title, body, category }));
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header />
        <div className="flex flex-col gap-2 max-w-3xl mx-auto mt-4">
          {error && !title && <Error type="Judul" />}
          <input
            type="text"
            placeholder="Tulis Judul"
            className="border p-2 rounded focus:outline-none dark:bg-gray-700 dark:text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
          />
          <span className="text-xs text-right text-gray-500 dark:text-gray-300  mb-2">
            Sisa Karakter:{50 - title.length}{" "}
          </span>

          <input
            type="text"
            placeholder="Kategori"
            className="border p-2 rounded focus:outline-none dark:bg-gray-700 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            maxLength={50}
          />
          {error && !body && <Error type="Body" />}
          <textarea
            rows={10}
            placeholder="Tulis Deskripsi"
            className="border p-2 rounded focus:outline-none dark:bg-gray-700 dark:text-white"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="flex flex-row-reverse">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white  p-2 rounded w-fit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateThread;
