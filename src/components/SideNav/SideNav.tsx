import React, { Component } from "react";
import { CdsIcon } from "@cds/react/icon";
import {
  ClarityIcons,
  userIcon,
  homeIcon,
  applicationsIcon,
} from "@cds/core/icon";
import { CdsNavigation, CdsNavigationItem } from "@cds/react/navigation";

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(applicationsIcon);

export default class SideNav extends Component {
  render() {
    return (
      <nav cds-layout="p:md p@md:lg">
        <div cds-layout="horizontal wrap:none" style={{ height: "100%" }}>
          <CdsNavigation expanded cds-layout="">
            <CdsNavigationItem>
              <a href="www.example.com">
                <CdsIcon size="md" shape="home"></CdsIcon>
                Sign Up
              </a>
            </CdsNavigationItem>

            <CdsNavigationItem>
              <a href="www.example.com">
                <CdsIcon size="md" shape="applications"></CdsIcon>
                Login
              </a>
            </CdsNavigationItem>

            <CdsNavigationItem active>
              <a href="www.example.com">
                <CdsIcon size="md" shape="user"></CdsIcon>
                Verify MFA
              </a>
            </CdsNavigationItem>
          </CdsNavigation>
        </div>
      </nav>
    );
  }
}
