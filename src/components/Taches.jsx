import React, { useState } from "react";
import { Message } from "./assets/icons/Message";
import { Paperclip } from "./assets/icons/Paperclip";
import { Timer } from "./assets/icons/Timer";

export const Taches = () => {
  const [Taches, SetTaches] = useState([
    {
      tittle: "Search Inspiration for Project",
      start: "9.00 am",
      link: "www.dribble.com",
      comments: [
        "good",
        "nice",
        "great",
        "good",
        "nice",
        "great",
        "good",
        "nice",
      ],
      complete: 24,
    },
    {
      tittle: "Website Redesign",
      start: "3.00 am",
      link: "www.kensho.co",
      comments: ["good", "nice", "great", "good"],
      complete: 60,
    },
  ]);

  return (
    <div>
      {Taches.map((tache) => {
        return (
          <div className="tache">
            <div className="tache-components">
              <p>Start from</p>
              <p>{tache.start}</p>
            </div>
            <div className="tache-components2">
              <h3>{tache.tittle}</h3>
              <div className="link-comments">
                <div className="under-tasks">
                  <Paperclip />
                  <a href={tache.link}>{tache.link}</a>
                </div>
                <div className="under-tasks">
                  <Message />
                  <p>{tache.comments.length} comments</p>
                </div>
              </div>
            </div>
            <div className="tache-components3">
              <p>{tache.complete}% complete</p>
            </div>
            <button className="button-remider">
              <Timer />
              <p>Remider</p>
            </button>
          </div>
        );
      })}
    </div>
  );
};
