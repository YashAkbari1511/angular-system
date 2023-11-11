import { Injectable } from "@angular/core";
import { ScriptStore } from "./script.store";

declare var document: any;

@Injectable()
export class ScriptService {
    private scripts: any = {};

    constructor() {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
                isUrl: script.isUrl,
                loadIn: script.loadIn ? script.loadIn : 'head',
            };
        });
    }

    /**
     * Loads predefines scripts
     * @param scripts 
     * @returns 
     */
    load(...scripts: string[]) {
        var promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    /**
     * Loads the script if not already loaded into the DOM
     * @param name 
     * @returns 
     */
    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            if (this.scripts[name].loaded) {
                // resolve if already loaded
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // loads script whether it is url or custom script
                if (this.scripts[name].isUrl) {
                    this.loadOnlineScript(name, this.scripts[name].src, this.scripts[name].isUrl, this.scripts[name].loadIn).then((res: any) => {
                        resolve(res);
                    });
                } else {
                    this.loadCustomScript(name, this.scripts[name].src, this.scripts[name].isUrl, this.scripts[name].loadIn).then((res: any) => {
                        resolve(res);
                    });
                }
            }
        });
    }

    /**
     * Loads the script usiong the url
     * @param name 
     * @param scriptUrl 
     * @param isUrl 
     * @param loadIn 
     * @returns 
     */
    loadOnlineScript(name: string, scriptUrl: string, isUrl: boolean = true, loadIn: string = 'head') {
        return new Promise((resolve, reject) => {
            name = this.slugifyText(name);
            if (this.scripts[name] && this.scripts[name]?.loaded) {
                //resolve if already loaded
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            } else {
                //load script
                this.scripts[name] = {
                    loaded: false,
                    src: scriptUrl,
                    isUrl: isUrl,
                    loadIn: loadIn ? loadIn : 'head',
                };

                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptUrl;
                if (script.readyState) {  //IE
                    script.onreadystatechange = () => {
                        if (script?.readyState === "loaded" || script?.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                } else {  //Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Error' });
                document.getElementsByTagName(loadIn)[0].appendChild(script);
            }
        });
    }

    /**
     * * Loads the custom script code
     * @param name 
     * @param scriptCode 
     * @param isUrl 
     * @param loadIn 
     * @returns 
     */
    loadCustomScript(name: string, scriptCode: string, isUrl: boolean = false, loadIn: string = 'head') {
        return new Promise((resolve, reject) => {
            name = this.slugifyText(name);
            if (this.scripts[name] && this.scripts[name]?.loaded) {
                //resolve if already loaded
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            } else {
                //load script
                this.scripts[name] = {
                    loaded: false,
                    src: scriptCode,
                    isUrl: isUrl,
                    loadIn: loadIn ? loadIn : 'head',
                };
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.innerHTML = this.stripScripts(scriptCode);
                document.getElementsByTagName(loadIn)[0].appendChild(script);
                resolve({ script: name, loaded: true, status: 'Loaded' });
            }
        });
    }

    stripScripts(customScript: any) {
        let finalScript = '';
        if (customScript) {
            finalScript = customScript.replace(/(<([^>]+)>)/ig, "").replace(/\r\n|\r|\n/g, "<br />");
        }
        return finalScript;
    }

    slugifyText(text: string) {
        return text.toLowerCase()
            .replace(/ /g, '_')
            .replace(/[^\w-]+/g, '');
    }
}