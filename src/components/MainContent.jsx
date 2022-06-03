import React, { useState } from "react";
import { AngleRight } from "./icons/AngleRight";
import { Calendar } from "./icons/Calendar";
import { Filter } from "./icons/Filter";
import { SearchIcon } from "./icons/SearchIcon";

function MainContent() {
  const [value1, changeValue1] = useState("Today");
  const [value2, changeValue2] = useState("Filters");

  return (
    <div id="main-content">
      <div className="row space-between">
        <h3>Remaining Task</h3>
        <div>
          <input placeholder="Search anything ..." />
          <SearchIcon />
        </div>
      </div>
      <div className="row space-between baseline">
        <div>
          <h2>Active Tasks</h2>
          <p>You can edit all the stuff as you wish</p>
        </div>
        <div className="row">
          <div className="select">
            <Calendar />
            <select value={value1} onChange={changeValue1}>
              <option value="Yesterday">Yesterday</option>
            </select>
          </div>
          <div className="select">
            <Filter />
            <select value={value2} onChange={changeValue2}>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div>
          <div>
            <h3>Milestones</h3>
            <div></div>
          </div>
          <div>
            <h3>Task summary</h3>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <h3>Tasks</h3>
            <div className="row">
              <p>See All Tasks</p>
              <AngleRight />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
