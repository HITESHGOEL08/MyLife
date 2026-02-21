import React from "react";
import { googleAnalyticsService } from "..";
import ReactGA from "react-ga";

jest.mock("react-ga", () => ({
    initialize: jest.fn(),
    ga: jest.fn(),
}));

const { initGA } = googleAnalyticsService;

describe("Google Analytics", () => {
    it("Initialize GA", () => {
        initGA();
        expect(ReactGA.initialize).toHaveBeenCalledWith(
            "UA-175785716-1",
            expect.objectContaining({
                gaOptions: expect.objectContaining({
                    userId: expect.any(String),
                    name: expect.any(String)
                }),
                testMode: false
            })
        );

        // Mimic the component call
        ReactGA.ga("send", "pageview", "/mypage");
        expect(ReactGA.ga).toHaveBeenCalledWith("send", "pageview", "/mypage");
    });
});
