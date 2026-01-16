"use client";

import {useEffect} from "react";
import {sdk} from "@farcaster/miniapp-sdk";

export default function TestProvider({children}: any) {
    useEffect(() => {
        sdk.actions.ready();
    }, []);

    return <div>
        {children}
    </div>
}