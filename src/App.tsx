import React from "react";
import "./App.css";
import { CdsDivider } from "@cds/react/divider";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import SideForm from "./components/SideForm/SideForm";

function App() {
  return (
    <div
      cds-layout="vertical align:horizontal-stretch"
      style={{ height: "100vh" }}
    >
      <Header />

      <div cds-layout="horizontal align:vertical-stretch">

        <SideNav />

        <CdsDivider orientation="vertical"></CdsDivider>

        <div cds-layout="p:md p@md:lg align:stretch">Main Content</div>

        <CdsDivider orientation="vertical"></CdsDivider>

        <section cds-layout="p:md p@md:xl">
          <SideForm />
        </section>

      </div>

      <CdsDivider></CdsDivider>

      <footer cds-layout="p:md p@md:lg">footer</footer>
    </div>
  );
}

export default App;


    // <div>
    //   <header className="header-6">
    //     <div className="branding">
    //       <a href="..." className="nav-link">
    //         {/* <img className="clr-icon" src={logo} /> */}
    //         <span className="title">cicloud</span>
    //       </a>
    //     </div>
    //     <div className="header-nav">
    //       <a href="/dashboard" className="active nav-link">
    //         <span className="nav-text">Dashboard</span>
    //       </a>
    //       <a href="/projects" className="nav-link">
    //         <span className="nav-text">Projects</span>
    //       </a>
    //       <a href="/infrastructure" className="nav-link">
    //         <span className="nav-text">Infrastructure</span>
    //       </a>
    //     </div>
    //     <div className="header-actions">
    //       <a href="..." className="nav-link nav-icon">
    //         {/* <clr-icon shape="cog" /> */}
    //       </a>
    //     </div>
    //   </header>
    // </div>
