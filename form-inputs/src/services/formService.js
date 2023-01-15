

const endpoint = "http://mockbin.com/request?foo=bar&foo=baz";

export const postData = async (data) => {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "cookie": "foo=bar; bar=baz",
            "x-pretty-print": "2",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error("Unable to make the request");
    }
}


