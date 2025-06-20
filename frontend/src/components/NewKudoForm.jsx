import React from "react";
import { useState } from "react";

export default function NewKudoForm({
  boardId,
  fetchKudoList,
  baseAPIURL,
  createKudoModalClass,
  setCreateKudoModalClass,
}) {
  const [kudoTitle, setKudoTitle] = useState("");
  const [kudoDescription, setKudoDescription] = useState("");
  const [kudoGifUrl, setKudoGifUrl] = useState("");
  const [kudoOwner, setKudoOwner] = useState("");

  const [gifList, setGifList] = useState([]);
  const [gifSearch, setGifSearch] = useState("");

  const searchGif = async () => {
    try {
      const url = `
      https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&q=${gifSearch}&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips
      `;

      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error fetching the gifs: ${response.status}`);
      }
      const parsedResponse = await response.json();
      console.log(parsedResponse.data);
      setGifList(parsedResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewKudo = async () => {
    try {
      const newKudo = {
        title: kudoTitle,
        description: kudoDescription,
        gifUrl: kudoGifUrl,
        owner: kudoOwner,
        boardId: boardId,
      };

      const response = await fetch(baseAPIURL + "/kudos/create-new-kudo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newKudo),
      });

      if (!response.ok) {
        throw new Error(`Error creating the kudo: ${response.status}`);
      }

      const parsedResponse = await response.json();
      console.log(parsedResponse);
    } catch (error) {
      window.alert("Something went wrong creating the kudo");
      console.error(error);
    }
  };

  return (
    <section className={"modal " + createKudoModalClass}>
      <div className="modal-content">
        <div className="close-container">
          <i
            className="fa-solid fa-xmark"
            onClick={() => setCreateKudoModalClass("closed")}
          ></i>
        </div>
        <h2>Create New Kudo</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await createNewKudo();
            await fetchKudoList();
            setCreateKudoModalClass("closed");
          }}
        >
          <label>
            Kudo Title
            <input
              type="text"
              value={kudoTitle}
              onChange={(e) => setKudoTitle(e.target.value)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={kudoDescription}
              onChange={(e) => setKudoDescription(e.target.value)}
            />
          </label>
          <label>
            Search Gifs...
            <input
              type="text"
              value={gifSearch}
              onChange={(e) => setGifSearch(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                searchGif();
              }}
            >
              Search
            </button>
          </label>
          <div className="searches-gifs-container">
            {gifList.map((gif, index) => {
              console.log(gifList);
              return (
                <img
                  src={gif.images.original.url}
                  alt=""
                  key={index}
                  onClick={() => {
                    setKudoGifUrl(gif.images.original.url);
                  }}
                />
              );
            })}
          </div>
          <label>
            Gif URL
            <input
              type="text"
              value={kudoGifUrl}
              onChange={(e) => setKudoGifUrl(e.target.value)}
            />
          </label>
          <label>
            Owner
            <input
              type="text"
              value={kudoOwner}
              onChange={(e) => setKudoOwner(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}
