export async function load({fetch}){
    const body = new FormData();
    body.append("client_name", "tootbooster");
    body.append("redirect_uris", `http://example.com`);
    body.append("scopes", "read write push");
    const url = `https://httpbin.io/post`;
    const res = await fetch(url, {
        method: "POST",
        body,
      });
      console.log("trying");
      console.log({ res });
}