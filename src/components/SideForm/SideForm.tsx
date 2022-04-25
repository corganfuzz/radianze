import React, { Component } from "react";
import { CdsFormGroup } from "@cds/react/forms"
import { CdsInput } from "@cds/react/input";
import { CdsTextarea } from "@cds/react/textarea";
import { CdsButton } from "@cds/react/button";

export default class SideForm extends Component {
  render() {
    return (
        <form>
          <CdsFormGroup>
            <CdsInput>
              <label>Username</label>
              <input type="text" />
            </CdsInput>

            <CdsInput>
              <label>Password</label>
              <input type="text" />
            </CdsInput>

            <CdsTextarea>
              <label>Body Request</label>
              <textarea></textarea>
            </CdsTextarea>

            <CdsButton type="submit">Send Request</CdsButton>
          </CdsFormGroup>
        </form>
    );
  }
}
