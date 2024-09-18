import { contextBridge, ipcRenderer } from "electron";

const api = {
  hello: () => ipcRenderer.invoke("hello"),
};

contextBridge.exposeInMainWorld("rust", api);

declare global {
  interface Window {
    rust: typeof api;
  }
}
