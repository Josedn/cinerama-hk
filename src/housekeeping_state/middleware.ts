import { Middleware } from "@reduxjs/toolkit";

export const middleware: Middleware =
    ({ dispatch }) =>
        (next) =>
            (action): void => {
                next(action);
                console.log("hello from middleware", action);
            };