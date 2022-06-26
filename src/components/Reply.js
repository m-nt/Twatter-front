import React from "react";

function Reply({ username }) {
  return (
    <>
      <div className="modal-footer">
        <div className="card-body">
          <h4 className="card-title">replying to {username}</h4>
          <div className="form-group">
            <label for="exampleTextarea" class="form-label text-muted mt-4">
              Twaat your reply
            </label>
            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary d-flex justify-content-end">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reply;
