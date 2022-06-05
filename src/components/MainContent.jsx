import React, { useState } from "react";
import { AngleRight } from "./assets/icons/AngleRight";
import { Calendar } from "./assets/icons/Calendar";
import { Filter } from "./assets/icons/Filter";
import { SearchIcon } from "./assets/icons/SearchIcon";
import { Taches } from "./Taches";

function MainContent() {
  const [value1, changeValue1] = useState("Today");
  const [value2, changeValue2] = useState("Filters");

  return (
    <div id="main-content">
      <div className="row space-between top-content">
        <h3>Remaining Task</h3>
        <div className="search-bar">
          <input className="search" placeholder="Search anything ..." />
          <SearchIcon />
        </div>
      </div>
      <div className="row space-between center top-content">
        <div>
          <h2>Active Tasks</h2>
          <p>You can edit all the stuff as you wish</p>
        </div>
        <div className="row">
          <div className="select">
            <Calendar />
            <select value={value1} onChange={changeValue1}>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
            </select>
          </div>
          <div className="select">
            <Filter />
            <select value={value2} onChange={changeValue2}>
              <option value="Done">Done</option>
              <option value="NotDone">NotDone</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="row space-between">
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
          <div className="row space-between">
            <h3>Tasks</h3>
            <div className="row center">
              <p>See All Tasks</p>
              <AngleRight />
            </div>
          </div>
          <Taches />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
