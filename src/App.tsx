import React from 'react';
import './App.css';
import {mails} from "./data/mails";
import {Mail} from "./models/Mail"

type MailProps = {
    mail: Mail;
}

function MailItem({mail}: MailProps) {
    return (
        <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{mail.from.username}</p>
            <p className="text-sm text-gray-500">{mail.subject}</p>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            mails.map((mail) =>
                <MailItem key={mail.from.name} mail={mail} />
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
