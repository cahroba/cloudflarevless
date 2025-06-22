export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const upstream = "vless.panel.ircf.space";
    const path = "/jveKPgfoJGKXg6E0";

    if (url.pathname === path) {
      url.hostname = upstream;
      return fetch(url.toString(), request);
    }

    return new Response("Worker is active", { status: 200 });
  }
}
