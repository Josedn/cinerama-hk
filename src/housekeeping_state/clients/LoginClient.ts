import nprogress from 'nprogress';// A mock function to mimic making an async request for data

export function fetchLogin(username: string, password: string) {
    return new Promise<{ data: string, error: string }>((resolve, reject) => {
        //TODO: use middleware
        nprogress.start();
        if (username === "jose") {
            setTimeout(() => resolve({ data: "randomtoken42069" + username + ":" + password, error: "" }), 500);
        } else if (username === "ex") {
            setTimeout(() => reject(new Error("Can't connect or something")), 500);
        } else {
            setTimeout(() => resolve({ data: "", error: "Wrong password" }), 500);
        }
    }
    ).finally(() => {
        nprogress.done();
    });
}