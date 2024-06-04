"use client";

import NextDynamic from "next/dynamic";
import NextScript from "next/script";

export const DynamicMicrosoftClarityButton = NextDynamic(
  () =>
    import("./MicrosoftClarityButton").then((r) => r.MicrosoftClarityButton),
  { ssr: false }
);

export const MicrosoftClarity = () => {
  return (
    <NextScript
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
                `,
      }}
    />
  );
};
