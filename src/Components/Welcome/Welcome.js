import React from "react";
import "./Welcome.css";
import { channels } from "../../shared/constants";
const { ipcRenderer } = window;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "",
      appVersion: "",
    };
    if (ipcRenderer) {
      ipcRenderer.send(channels.APP_INFO);
      ipcRenderer.on(channels.APP_INFO, (event, arg) => {
        ipcRenderer.removeAllListeners(channels.APP_INFO);
        const { appName, appVersion } = arg;
        this.setState({ appName, appVersion });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <code>Start programming!</code>
        </header>
      </div>
    );
  }
}

export default App;
