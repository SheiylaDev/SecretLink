/**
 * @name SecretLink
 * @author Sheiylanie
 * @authorId 183948625368317952
 * @description Adds a system in the chat to create a hidden link.
 * @version 1.0.0
 * @invite GWYNKpbunT
 * @donate https://www.paypal.com/paypalme/Sheiylanie
 * @website https://revgames.tech/
 * @source https://github.com/SheiylaDev/SecretLink/blob/main/SecretLink.plugin.js
 * @updateUrl https://raw.githubusercontent.com/SheiylaDev/SecretLink/main/SecretLink.plugin.js
 */

class SecretLink {
    constructor(meta) {
        this.meta = meta;
        document.addEventListener('click', (e) => {
            if (!e.target.closest('button[aria-label="SecretLink"]') && !e.target.closest('.secretlink-dialog')) this.closeDialog();
        });
    }

    start() {
        this.loadSettings();
        this.saveSettings();
        this.addButton();
        this.checkVersion(true);
        this.setupObserver();
        this.setupKeyboardShortcut();
    }

    stop() {
        this.closeDialog();
        this.removeButton();
        this.disconnectObserver();
        this.removeKeyboardShortcut();
    }

    /* Settings */
    settings = {
        version: "1.0.0"
    };

    loadSettings() {
        this.settings = BdApi.Data.load(this.meta.name, "settings") || this.settings;
    }

    saveSettings() {
        BdApi.Data.save(this.meta.name, "settings", this.settings);
    }

    /* Changelogs */
    modalVersion(currentVersion, ModalComponents, ModalActions, changelogs) {
        const MyModal = (closeCallback) => {
            return BdApi.React.createElement(ModalComponents.ModalRoot, {
                transitionState: 1,
                size: 'small',
                children: [
                    BdApi.React.createElement('div', { className: 'flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz header-1ffhsl', style: { flex: '0 0 auto' } },
                        BdApi.React.createElement('div', { className: 'flexChild-3PzYmX', style: { flex: '1 1 auto' } },
                            BdApi.React.createElement('h1', { className: 'h4-6SAiIK title-lXcL8p defaultColor-3Olr-9 defaultMarginh4-3MmT5q', children: `${this.meta.name}` }),
                            BdApi.React.createElement('div', { className: 'colorStandard-1Xxp1s size12-12FL_s', children: `Version ${currentVersion}` })),
                        BdApi.React.createElement('button', { 'aria-label': 'Close', type: 'button', className: 'close-A4ZfTI button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg', onClick: closeCallback },
                            BdApi.React.createElement('div', { className: 'contents-3NembX' },
                                BdApi.React.createElement('svg', { 'aria-hidden': 'true', role: 'img', className: 'closeIcon-pSJDFz', width: '24', height: '24', viewBox: '0 0 24 24' },
                                    BdApi.React.createElement('path', { fill: 'currentColor', d: 'M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z' }))))),
                    BdApi.React.createElement('div', { className: 'content-1OG56Q container-3PVapX content-FDHp32 thin-RnSY0a scrollerBase-1Pkza4', dir: 'ltr', style: { overflow: 'hidden scroll', paddingRigth: '8px' } }, [
                        BdApi.React.createElement('h1', { className: 'fixed-cTX7Hp title-2ftWWc marginTop20-2T8ZJx', style: { marginTop: '0px' }, children: 'Changelogs' }),
                        BdApi.React.createElement('ul', { style: { fontSize: '' } }, changelogs.split('\n').map((item, index) => (
                            BdApi.React.createElement('li', { key: index }, item.trim())
                        ))),
                        BdApi.React.createElement('div', { 'aria-hidden': 'true', style: { position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '20px' } })
                    ]),
                    BdApi.React.createElement('div', {
                        className: 'flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz footer-IubaaS', style: { flex: '0 0 auto' }
                    }, [
                        BdApi.React.createElement('div', { className: 'footer-1gMODG' }, [
                            BdApi.React.createElement('a', { className: 'anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_ socialLink-1qjJIk', href: 'https://www.paypal.me/Sheiylanie', rel: 'noreferrer noopener', target: '_blank', role: 'button', tabindex: '0' },
                                BdApi.React.createElement('svg', { name: 'PayPal', width: '16', height: '16', viewBox: '0 0 24 24', className: 'icon-GhnIRB' },
                                    BdApi.React.createElement('path', { fill: 'currentColor', d: 'M 5.6863929,0 C 5.1806043,0 4.7507198,0.3656279 4.6704813,0.85995389 L 1.6795909,19.673995 c -0.058746,0.371103 0.2309887,0.706911 0.6092555,0.706911 h 4.4338638 l 1.1121097,-7.006437 -0.033522,0.22009 c 0.078805,-0.494326 0.5072079,-0.859954 1.0129965,-0.859954 h 2.1061586 c 4.139443,0 7.378419,-1.667588 8.325519,-6.4919233 0.02866,-0.1432829 0.07434,-0.4183163 0.07434,-0.4183163 C 19.589638,4.0390606 19.318112,2.8290903 18.345211,1.7301106 17.276361,0.5193702 15.342278,0 12.867737,0 Z M 21.516831,7.8139196 c -1.028771,4.7498274 -4.3124,7.2629664 -9.522166,7.2629664 H 10.107139 L 8.6962314,24 H 11.76 c 0.442744,0 0.820329,-0.319405 0.889104,-0.753552 l 0.03498,-0.189482 0.705454,-4.428033 0.04519,-0.244868 c 0.06878,-0.434148 0.446338,-0.753554 0.887649,-0.753554 h 0.559699 c 3.620757,0 6.455196,-1.457472 7.283371,-5.677153 0.332416,-1.693603 0.172401,-3.113533 -0.64861,-4.1394384 z' }))
                            ),
                            BdApi.React.createElement('div', { className: 'colorStandard-1Xxp1s size12-12FL_s', children: 'Support me for more updates !' })
                        ])
                    ])
                ]
            });
        };
        ModalActions.openModal((props) => { return MyModal(props.onClose); });
        this.settings['version'] = currentVersion;
        BdApi.Data.save(this.meta.name, "settings", this.settings);
    }

    checkVersion(sys) {
        const currentVersion = this.meta.version;
        const previousVersion = BdApi.Data.load(this.meta.name, "settings").version;
        const ModalComponents = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("ModalRoot"));
        const ModalActions = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("openModal", "updateModal"));
        const changelogs = `Add secret link button and CTRL + H`;
        if (sys) {
            if (previousVersion && currentVersion !== previousVersion) this.modalVersion(currentVersion, ModalComponents, ModalActions, changelogs);
        } else {
            this.modalVersion(currentVersion, ModalComponents, ModalActions, changelogs);
        }
    }

    addButton() {
        const buttonContainer = document.querySelector('.buttons-uaqb-5');
        if (!buttonContainer) return;
        const secretLinkButton = document.createElement('button');
        secretLinkButton.setAttribute('aria-label', 'SecretLink');
        secretLinkButton.classList.add("SecretLink");
        secretLinkButton.style.background = 'none';
        secretLinkButton.style.width = '40px';
        secretLinkButton.style.height = '44px';
        secretLinkButton.style.border = 'none';
        secretLinkButton.style.display = 'flex';
        secretLinkButton.style.alignItems = 'center';
        secretLinkButton.style.justifyContent = 'center';
        secretLinkButton.innerHTML = `
            <div class="SecretLink contents-3NembX button-2fCJ0o button-3BaQ4X">
                <div class="buttonWrapper-3YFQGJ" style="opacity: 1; transform: none;">
                    <svg name="SecretLink" width="24" height="24" viewBox="0 0 24 24" class="icon-1d5zch">
                        <path fill="currentColor" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.18 16.77C8.16 16.77 8.13 16.77 8.11 16.77C7.14 16.68 6.23 16.23 5.55 15.51C3.95 13.83 3.95 11.1 5.55 9.42L7.74 7.12C8.52 6.3 9.57 5.84 10.69 5.84C11.81 5.84 12.86 6.29 13.64 7.12C15.24 8.8 15.24 11.53 13.64 13.21L12.55 14.36C12.26 14.66 11.79 14.67 11.49 14.39C11.19 14.1 11.18 13.63 11.46 13.33L12.55 12.18C13.61 11.07 13.61 9.26 12.55 8.16C11.56 7.12 9.82 7.12 8.82 8.16L6.63 10.46C5.57 11.57 5.57 13.38 6.63 14.48C7.06 14.94 7.64 15.22 8.25 15.28C8.66 15.32 8.96 15.69 8.92 16.1C8.89 16.48 8.56 16.77 8.18 16.77ZM18.45 14.59L16.26 16.89C15.48 17.71 14.43 18.17 13.31 18.17C12.19 18.17 11.14 17.72 10.36 16.89C8.76 15.21 8.76 12.48 10.36 10.8L11.45 9.65C11.74 9.35 12.21 9.34 12.51 9.62C12.81 9.91 12.82 10.38 12.54 10.68L11.45 11.83C10.39 12.94 10.39 14.75 11.45 15.85C12.44 16.89 14.18 16.9 15.18 15.85L17.37 13.55C18.43 12.44 18.43 10.63 17.37 9.53C16.94 9.07 16.36 8.79 15.75 8.73C15.34 8.69 15.04 8.32 15.08 7.91C15.12 7.5 15.48 7.19 15.9 7.24C16.87 7.34 17.78 7.78 18.46 8.5C20.05 10.17 20.05 12.91 18.45 14.59Z" fill="#000000"></path>
                    </svg>
                </div>
            </div>`;
        secretLinkButton.addEventListener('click', this.showDialog.bind(this));
        buttonContainer.insertBefore(secretLinkButton, buttonContainer.firstChild);
    }

    showDialog() {
        const existingDialog = document.querySelector('.secretlink-dialog');
        if (existingDialog) { existingDialog.remove(); return; }
        const dialogHTML = `
        <div class="secretlink-dialog positionLayer-1cndvf theme-dark layer-2BGhQ8" style="position: absolute;bottom: 76px;right: 316px; height:100px">
            <section class="positionContainer-dMArNx" role="dialog">
                <div class="drawerSizingWrapper-1txdWG" style="width: 498px;">
                    <div class="resizeHandle-T_gFJR"></div>
                    <div class="contentWrapper-3vHNP2">
                        <nav class="nav-1zWVQw">
                            <div class="navList-YSb9UB">
                                <button aria-selected="true" aria-current="page" type="button" class="navButton-1XuvI- navItem-3McpmW navButtonActive-1EqC5l button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"><div class="contents-3NembX">SECRET LINK</div></button>
                                <button type="text" class="navButton-1XuvI- navItem-3McpmW button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"><div class="contents-3NembX"><div class="stickersNavItem-9B2BzM">Ctrl + H</div></div></button>
                                <button id="secretlink_error" style="display:none;" type="text" class="navButton-1XuvI- navItem-3McpmW button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"><div class="contents-3NembX"><div style="color:red">Please enter a valid url</div></div></button>
                            </div>
                        </nav>
                        <div id="secretlink-tab-panel" role="tabpanel" aria-labelledby="secretlink-tab" class="container-3u7RcY">
                            <div class="header-2TLOnc">
                                <div class="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz" style="flex: 1 1 auto;">
                                    <div class="SecretLink-3aIzc- container-2oNtJn medium-2NClDM">
                                        <div class="inner-2pOSmK">
                                            <div style="display: inline-block; border-right: none;">
                                                <select class="secretlink-selector select-Zz0IcO  lookFilled-GPyucw" style="border: none; width: 90px;">
                                                    <option value="http://">http://</option>
                                                    <option value="https://">https://</option>
                                                </select>
                                            </div>
                                            <input class="secretlink-input input-2m5SfJ" style="font-size: 12px;" placeholder="Enter the URL" aria-label="Enter the URL" value="">
                                            <div class="iconLayout-3Bjizv medium-2NClDM" tabindex="-1" aria-hidden="true" style="cursor: pointer;" role="button">
                                                <div class="iconContainer-6pgShY">
                                                    <svg fill="currentColor" class="icon-3CDcPB visible-CwPfRb" aria-label="Rechercher" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23 17h-5V6H7V1h16zm-6 6H1V7h16zm-1-1V8H2v14z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', dialogHTML);
        document.querySelector('.secretlink-input').focus();
        document.querySelector('.iconLayout-3Bjizv').addEventListener('click', this.handleInputEvent.bind(this));
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.keyCode === 13) {
                document.querySelector('.markup-eYLPri.editor-H2NA06.slateTextArea-27tjG0').blur();
            }
        });
        document.querySelector('.SecretLink-3aIzc-').addEventListener('keydown', (e) => { if (e.key === 'Enter') this.handleInputEvent(); });
    }

    handleInputEvent() {
        const protocolValue = document.querySelector('.secretlink-selector').value;
        const inputURL = document.querySelector('.secretlink-input').value;
        let inputValue;
        if (inputURL.startsWith('http://') || inputURL.startsWith('https://')) {
            inputValue = inputURL;
        } else {
            inputValue = protocolValue + inputURL;
        }
        const chatInput = document.querySelector('.markup-eYLPri.editor-H2NA06.slateTextArea-27tjG0');
        const currentMessage = chatInput ? chatInput.textContent : '';
        const urlPattern = /^https?:\/\/([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
        document.getElementById('secretlink_error').style.display = urlPattern.test(inputValue) ? 'none' : 'block';
        if (!urlPattern.test(inputValue)) return;
        const channelID = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("getLastSelectedChannelId")).getChannelId();
        const spaceIfNeeded = currentMessage.endsWith(' ') ? '' : ' ';
        document.querySelector('.secretlink-input').blur();
        document.querySelector('.secretlink-input').value = '';
        this.closeDialog();
        BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("sendMessage")).sendMessage(channelID, {
            content: `${currentMessage}${spaceIfNeeded}[Link](${inputValue})`,
            tts: false,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        });
    }


    closeDialog() {
        const existingDialog = document.querySelector('.secretlink-dialog');
        if (existingDialog) existingDialog.remove();
    }

    removeButton() {
        const customButton = document.querySelector('button[aria-label="SecretLink"]');
        if (customButton) customButton.remove();
    }

    setupObserver() {
        this.observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList' && !document.querySelector('button[aria-label="SecretLink"]') && !document.querySelector('.channelTextAreaDisabled-1p2fQv')) this.addButton();
            }
        });
        this.observer.observe(document, { attributes: true, childList: true, subtree: true });
    }

    disconnectObserver() { if (this.observer) this.observer.disconnect(); }

    setupKeyboardShortcut() { this.boundHandleKeyDown = this.handleKeyDown.bind(this); document.addEventListener('keydown', this.boundHandleKeyDown); }

    handleKeyDown(e) { if (e.ctrlKey && e.key === 'h') this.showDialog(); }

    removeKeyboardShortcut() { document.removeEventListener('keydown', this.boundHandleKeyDown); }
}

module.exports = SecretLink;