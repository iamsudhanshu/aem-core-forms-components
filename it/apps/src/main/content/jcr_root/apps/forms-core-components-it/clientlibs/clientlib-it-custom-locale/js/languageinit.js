/*******************************************************************************
 * Copyright 2023 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

(function() {
    "use strict";
    async function onDocumentReady() {
        const initGuideBridge = function(evnt) {
            let guideBridge = evnt.detail.guideBridge;
            onInit(guideBridge);
            window.removeEventListener("bridgeInitializeStart", initGuideBridge);
        };
        const onInit = function(gb) {
            gb.connect(function(){
                const formContainer =  gb.getFormModel();
                const formLanguage = formContainer.lang;
                const aemLangUrl = `/etc.clientlibs/forms-core-components-it/clientlibs/clientlib-it-custom-locale/resources/i18n/${formLanguage}.json`;
                FormView.LanguageUtils.loadLang(formLanguage, aemLangUrl);
            });
        }
        if (window.guideBridge) {
            let guideBridge = window.guideBridge;
            onInit(guideBridge);
        } else {
            window.addEventListener("bridgeInitializeStart", initGuideBridge);
        }
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

})();
