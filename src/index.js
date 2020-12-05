import React, { useEffect, useState } from "react";
//import { render } from "react-dom";

function App() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);
    return <div>{date.toDateString() + ' ' + date.toTimeString()}</div>;
}

// render(<App />, document.getElementById("root"));

window.customReportlets = {...window.customReportlets, ClockReportlet: App}
