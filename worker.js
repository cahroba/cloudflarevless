export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // آدرس سرور اصلی V2Ray (VLESS)
    const upstream = "vless.panel.ircf.space"; // اینجا باید IP یا آدرس سرور رو بزاری

    // مسیر ws (همون /path در کانفیگ)
    const path = "/jveKPgfoJGKXg6E0"; // همینو بذار اگه نمی‌دونی چیه، یا بعداً عوض کن

    // بررسی درخواست ورودی
    if (url.pathname === path) {
      url.hostname = upstream;
      return fetch(url.toString(), request);
    }

    return new Response("Not Found", { status: 404 });
  }
}
