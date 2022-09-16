// A mock function to mimic making an async request for data
export function fetchLogin(user: string, password: string) {
    return new Promise<{ data: string }>((resolve) =>
        setTimeout(() => resolve({ data: "randomtoken42069" + user + ":" + password }), 500)
    );
}