/** @type {import('next').NextConfig} */

const googleAnalyticsScriptSRC = ["https://*.googletagmanager.com"];
const googleAnalyticsConnectSRC = [
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.googletagmanager.com",
];
const googleAnalyticsImgSRC = [
  "https://*.google-analytics.com",
  "https://*.googletagmanager.com",
];

const googleFontSRC = ["https://fonts.gstatic.com"];

const microsoftClarityDefaultSRC = [
  "https://*.clarity.ms",
  "https://c.bing.com",
];

const createContentSecurityPolicy = () => {
  const policies = {};

  policies["default-src"] = [
    "'self'",
    ...microsoftClarityDefaultSRC,
    // "'unsafe-inline'",
    // "'unsafe-eval'",
  ];
  policies["style-src"] = ["'self'", "'unsafe-inline'"];
  policies["script-src"] = ["'self'", ...googleAnalyticsScriptSRC];
  policies["connect-src"] = ["'self'", ...googleAnalyticsConnectSRC];
  policies["frame-src"] = ["'self'"];
  policies["font-src"] = ["'self'", ...googleFontSRC];
  policies["img-src"] = ["'self'", ...googleAnalyticsImgSRC];

  /*
  "
  default-src https://.clarity.ms https://c.bing.com 'self'; 
  style-src 'unsafe-inline'; 
  script-src https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.datadoghq-browser-agent.com https://browser-intake-us5-datadoghq.com 'self'; connect-src https://.voltzbank.com https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.datadoghq-browser-agent.com https://browser-intake-us5-datadoghq.com 'self'; frame-src https://energisa.bemobi.com https://www.google.com; font-src https://fonts.gstatic.com 'self'; worker-src blob:;"
  */

  const csp = Object.entries(policies)
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .join("; ");

  console.log(csp);
  return csp;
};

const headers = async () => [
  {
    source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // source: "/:path*",
    headers: [
      { key: "Cache-Control", value: "no-cache" },
      { key: "X-Xss-Protection", value: "1;mode=block" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000;includeSubDomains",
      },
      {
        key: "Permissions-Policy",
        value:
          "accelerometer=(),camera=(),geolocation=(),magnetometer=(),microphone=(),payment=(),usb=()",
      },
      {
        key: "Content-Security-Policy",
        value: createContentSecurityPolicy(),
      },
    ],
  },
];

const nextConfig = {
  output: "export",
  // headers,
};

export default nextConfig;
