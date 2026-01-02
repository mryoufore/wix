(function(){"use strict";const i="._debug-placeholder_57yzs_3{color:#333}._overlay_57yzs_11{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;display:flex;justify-content:center;align-items:center;z-index:9999}._modal_57yzs_39{background:#fff;padding:2rem;border-radius:12px;width:90%;max-width:500px;box-shadow:0 10px 30px #0003;display:flex;flex-direction:column}._header_57yzs_61{display:flex;justify-content:space-between;margin-bottom:20px;width:100%}._closeBtn_57yzs_75{background:none;border:none;font-size:24px;cursor:pointer}._uploadZone_57yzs_89{border:2px dashed #ccc;padding:40px;text-align:center;border-radius:8px}._resultZone_57yzs_103{display:flex;flex-direction:column;align-items:center;gap:10px}._preview_57yzs_117{max-width:100px;border-radius:8px;object-fit:cover}._mainBtn_57yzs_129{background:#000;color:#fff;padding:10px 20px;border-radius:20px;border:none;width:100%;margin-top:10px;cursor:pointer}";console.log("🚀 Mirrorfit Vanilla JS Loading...");class r extends HTMLElement{_isOpen=!1;_productImage="";_productName="";shadow;static get observedAttributes(){return["is-open","product-image","product-name"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){console.log("✅ Mirrorfit (Vanilla) Connected"),this.render()}attributeChangedCallback(t,o,e){console.log(`Attr: ${t} = ${e}`),t==="is-open"&&(this._isOpen=e==="true"),t==="product-image"&&(this._productImage=e),t==="product-name"&&(this._productName=e),this.isConnected&&this.render()}dispatchClose(){this._isOpen=!1,this.dispatchEvent(new CustomEvent("modal-closed",{bubbles:!0,composed:!0})),this.render()}render(){if(!this._isOpen){this.shadow.innerHTML=`
                <style>${i}</style>
                <div class="debug-placeholder" style="border: 2px dashed #8A3FFC; background: #F3E5F5; padding: 20px; text-align: center; border-radius: 8px; font-family: sans-serif;">
                    <h3 style="margin: 0; color: #8A3FFC;">🔮 Mirrorfit (Vanilla)</h3>
                    <p style="margin: 5px 0; font-size: 12px;">Status: Closed. Trigger me.</p>
                    <button id="test-open">Test Open</button>
                    <div style="font-size: 10px; margin-top:5px; color: #666;">
                       Product: ${this._productName||"None"}
                    </div>
                </div>
            `,this.shadow.querySelector("#test-open")?.addEventListener("click",()=>{this._isOpen=!0,this.render()});return}this.shadow.innerHTML=`
            <style>${i}</style>
            <div class="overlay">
                <div class="modal">
                    <div class="header">
                        <h2>Try On: ${this._productName||"Garment"}</h2>
                        <button class="closeBtn" id="close-btn">×</button>
                    </div>
                    <div class="content">
                        <!-- Upload Step -->
                        <div class="uploadZone" id="upload-zone">
                            <input type="file" id="file-input" accept="image/*">
                            <p>Upload your photo</p>
                        </div>

                        <!-- Result Step (Hidden initially) -->
                        <div class="resultZone" id="result-zone" style="display: none;">
                            <img id="preview-img" class="preview" src="">
                            <div class="plus">+</div>
                            <img class="preview" src="${this._productImage}">
                            <button class="mainBtn">Generating...</button>
                        </div>
                    </div>
                </div>
            </div>
        `,this.shadow.querySelector("#close-btn")?.addEventListener("click",()=>this.dispatchClose()),this.shadow.querySelector("#file-input")?.addEventListener("change",o=>{const e=o.target.files?.[0];if(e){const n=URL.createObjectURL(e),d=this.shadow.querySelector("#result-zone"),l=this.shadow.querySelector("#upload-zone"),a=this.shadow.querySelector("#preview-img");a.src=n,l.style.display="none",d.style.display="flex"}})}}const s="mirrorfit-modal";window.customElements.get(s)||(window.customElements.define(s,r),console.log(`✅ Registered <${s}> successfully.`))})();
