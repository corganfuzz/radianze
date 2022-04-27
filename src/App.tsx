import React from "react";
import "./App.css";
import { CdsDivider } from "@cds/react/divider";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import JsonViewer from "./customComponents/JsonViewer";

function App() {
  return (
    <div cds-layout="vertical align:stretch">
      <Header />

      <div cds-layout="horizontal align:vertical-stretch wrap:none">
        <SideNav />

        <CdsDivider orientation="vertical"></CdsDivider>

        <div cds-layout="vertical align:stretch">
          <div className="demo-content demo-scrollable-content">
            <div cds-layout="vertical gap:md p:md">
              <JsonViewer />
            </div>
          </div>

          <CdsDivider></CdsDivider>

          <footer cds-layout="p-y:md p-x:lg">footer</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
