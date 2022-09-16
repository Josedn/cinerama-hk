// A mock function to mimic making an async request for data
export function fetchLogin(username: string, password: string) {
    return new Promise<{ data: string }>((resolve, reject) => {
        if (username !== "") {
            setTimeout(() => resolve({ data: "randomtoken42069" + username + ":" + password }), 500);
        } else {
            setTimeout(() => reject(new Error("Bad username")), 500);
        }
    }
    );
}