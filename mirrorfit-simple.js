// NO REACT, NO DEPENDENCIES, JUST PURE DOM
// Use this to verify Wix is actually loading your script.

class SimpleTest extends HTMLElement {
    constructor() {
        super();
        console.log("SimpleTest: Constructor");
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log("SimpleTest: Connected");
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                    min-height: 200px;
                    background: purple;
                    color: white;
                    font-size: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 10px solid yellow;
                    box-sizing: border-box;
                }
            </style>
            <div>
                WIDGET IS ALIVE!<br>
                (Vanilla JS Test)
            </div>
        `;
    }
}

// Register if not exists
if (!customElements.get('mirrorfit-modal')) {
    customElements.define('mirrorfit-modal', SimpleTest);
}
