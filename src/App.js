import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
    <h1>Gmail API demo</h1>

    <a href="#compose-modal" data-toggle="modal" id="compose-button" className="btn btn-primary pull-right hidden">Compose</a>

    <button id="authorize-button" className="btn btn-primary hidden">Authorize</button>

    <table className="table table-striped table-inbox hidden">
      <thead>
        <tr>
          <th>From</th>
          <th>Subject</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>


  <div className="modal fade" id="compose-modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">Compose</h4>
        </div>
        <form onSubmit={this.sendEmail}>
          <div className="modal-body">
            <div className="form-group">
              <input type="email" className="form-control" id="compose-to" placeholder="To" required />
            </div>

            <div className="form-group">
              <input type="text" className="form-control" id="compose-subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <textarea className="form-control" id="compose-message" placeholder="Message" rows="10" required></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="onSubmit" id="send-button" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div className="modal fade" id="reply-modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">Reply</h4>
        </div>
        <form onSubmit={this.sendReply}>
          <input type="hidden" id="reply-message-id" />

          <div className="modal-body">
            <div className="form-group">
              <input type="text" className="form-control" id="reply-to" disabled />
            </div>

            <div className="form-group">
              <input type="text" className="form-control disabled" id="reply-subject" disabled />
            </div>

            <div className="form-group">
              <textarea className="form-control" id="reply-message" placeholder="Message" rows="10" required></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="onSubmit" id="reply-button" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default App;
