import React, { Component } from "react";
import { setTheme } from "@ui5/webcomponents-base/src/Theming";
import "@ui5/webcomponents/dist/ThemePropertiesProvider";
import "@ui5/webcomponents/dist/ShellBar"; 
import "@ui5/webcomponents/dist/ToggleButton"; 
import "@ui5/webcomponents/dist/CheckBox"; 

class MyComponent extends Component {	

	constructor (props) {
		super(props);
		this.state = {
			appTitle: "Evo Workshop 2019",
			checked: true
		}
		this.cb = React.createRef();
		this.fnOnBtnPress = this.onBtnPress.bind(this);
		this.fnOnCBChange = this.onCBChange.bind(this);
	}

	componentDidMount() {
		this.cb.current.addEventListener("change", this.fnOnCBChange);
	}

	onBtnPress(event) {
		this.switchTheme(event.target.pressed);
	}

	onCBChange(event) {
		this.switchTheme(event.target.checked);
	}

	switchTheme(hcb) {
		setTheme(hcb ? "sap_belize_hcb" : "sap_fiori_3");
	}

	render() {
		return (
			<div>
				<ui5-shellbar
					primary-title={this.state.appTitle}
					show-notifications
					show-co-pilot
					show-product-switch>
				</ui5-shellbar>
					
				<ui5-togglebutton onClick={this.fnOnBtnPress}>Fiori 3/HCB</ui5-togglebutton><br/>
				<ui5-checkbox ref={this.cb} text="Fiori 3/HCB"></ui5-checkbox>
				<ui5-checkbox checked={this.state.checked}></ui5-checkbox>
			</div>
		);
	}
}

export default MyComponent;