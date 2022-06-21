import React from "react";

function Twatting() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">username</h4>
          <div class="form-group">
            <label for="exampleTextarea" class="form-label text-muted mt-4">
              What's happening?
            </label>
            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-primary d-flex justify-content-end">
            Twaat
          </button>
        </div>
      </div>
    </>
  );
}

export default Twatting;
