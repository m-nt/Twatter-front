import React from "react";
import Twatting from "./Twatting";
import Twaat from "./Twaat";
import Trends from "./Trends";
import Profile from "./Profile";
import TwaatBig from "./TwaatBig";

function Home({ username, id, email, twaats, trends }) {
  return (
    <>
      <div className="App d-flex justify-content-center">
        <div className="w-25">
          <Profile username={username} id={id} email={email} />
        </div>
        <div className="App w-50 d-flex flex-column-reverse">
          <Twaat
            username={"foad"}
            id={5456165651}
            twaat={"Hi, today is a great day."}
            likes={5}
            retwaats={11}
            replys={13}
          />
          <Twaat
            username={"mohamad"}
            id={5456165651}
            twaat={"hello mother fuckers"}
            likes={3}
            retwaats={5}
            replys={10}
          />
          <Twaat username={"ali"} id={5646461561} twaat={"hey bois"} likes={3000} retwaats={540} replys={320} />
          {/* <Twatting /> */}
          <TwaatBig usernameR={"mohamad"} username={"ali"} id={5646461561} twaat={"hey bois"} />
        </div>
        <div className="w-25">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search twatter"
              aria-label="Search twatter"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Search
            </button>
          </div>

          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Trends for you</h4>

              <Trends twaats={15} place={"Iran"} />
              <Trends twaats={15} place={"Iran"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
