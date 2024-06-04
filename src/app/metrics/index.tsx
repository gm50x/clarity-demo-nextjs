import { DatadogRUM } from "./DatadogRUM";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { MicrosoftClarity } from "./MicrosoftClarity";

export const Metrics = () => {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <DatadogRUM />
    </>
  );
};
