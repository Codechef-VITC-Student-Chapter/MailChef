import {atom} from "recoil";

export const htmlCodeState=atom({
    key:"htmlCode",
    default:`<h1>Hello Creators! Design Your Dream Posters</h1>\n<h2>Design. Code. Display</h2>`,
});

export const cssCodeState=atom({
    key:"cssCode",
    default:`body{\n\tfont-family: system-ui;\n\tbackground: #FFFFFF;\n\tcolor: black;\n\ttext-align: center;\n}`,});

    