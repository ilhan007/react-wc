# react-wc

1. Bootstrap the app with [Create React App](https://github.com/facebook/create-react-app#creating-an-app) executing the following commands in your terminal.

	```sh
	npm init react-app test-react-wc
	cd test-react-wc
	```

2. Install the UI5 Web Components.

	```sh
	npm install @ui5/webcomponents
	```

3. Create src/MyComponent.js
```js
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
```

4. Use in src/App.js
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
     <MyComponent></MyComponent>
    </div>
  );
}

export default App;
```

5. Add the following css --src/index.css
```css
html, body, .root, .App {
	padding: 0;
	margin: 0;
	background: var(--sapShell_Background, #fafafa);
}
```
