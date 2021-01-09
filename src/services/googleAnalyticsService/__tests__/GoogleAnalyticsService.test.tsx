import React from "react";
import { googleAnalyticsService } from "..";
import ReactGA from "react-ga";

const { initGA } = googleAnalyticsService;

describe("Google Anakytics", () => {
    it("Initaize GA", () => {
        expect(initGA()).toBeCalled();
        ReactGA.initialize("OK", {
            testMode: true
        })

        ReactGA.ga("send", "pageview", "/mypage")

        expect(ReactGA.testModeAPI.calls).toEqual([
            ["create", "OK", "auto"],
            ["send", "pageview", "/mypage"],
        ])
    });
});
