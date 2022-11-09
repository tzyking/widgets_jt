/**
 * This is the API key you should use for the Google Translate API. Copy paste this into the top of your ‘Translate.js’ file for right now. Of course, make sure you comment it out.

AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

This API can only be used when your browser is at ‘http://localhost:3000’. If you try to make a request to the API from any other address, the request will fail.
 */

import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label="Select A Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <Convert language={language} text={text} />
        </div>
    );
};

export default Translate;
