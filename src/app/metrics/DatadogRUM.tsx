"use client";

import NextScript from "next/script";
export const DatadogRUM = () => {
  return (
    <NextScript id="datadog-rum">
      {`
             (function(h,o,u,n,d) {
               h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
               d=o.createElement(u);d.async=1;d.src=n
               n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
             })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js','DD_RUM')
             window.DD_RUM.onReady(function() {
               window.DD_RUM.init({
                 clientToken: '${process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN}',
                 applicationId: '${process.env.NEXT_PUBLIC_DD_APP_ID}',
                 site: 'us5.datadoghq.com',
                 service: '${process.env.NEXT_PUBLIC_DD_APP_NAME}',
                 env: '${process.env.NEXT_PUBLIC_DD_APP_ENV}',
                 // Specify a version number to identify the deployed version of your application in Datadog
                 // version: '1.0.0',
                 sessionSampleRate: ${process.env.NEXT_PUBLIC_DD_SESSION_SAMPLE_RATE},
                 sessionReplaySampleRate: ${process.env.NEXT_PUBLIC_DD_REPLAY_SAMPLE_RATE},
                 trackUserInteractions: true,
                 trackResources: true,
                 trackLongTasks: true,
                 defaultPrivacyLevel: 'mask-user-input',
               });
             })
           `}
    </NextScript>
  );
};
