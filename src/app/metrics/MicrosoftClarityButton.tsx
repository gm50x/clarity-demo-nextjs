import { useEffect } from "react";

type Clarity = {
  set: (key: string, value: string | string[]) => void;
};

type MicrosoftClarityGlobal = (
  arg: string,
  key: string,
  value: string | string[]
) => void;

export const useMicrosoftClarity = () => {
  const getClarity = () => (window as any).clarity;

  useEffect(() => {
    console.log("clarity is ready set");
    const clarity = getClarity();
    // clarity("identify", "custom-id", "custom-session-id", "custom-page-id", "friendly-name");
    // clarity(
    //   "identify",
    //   "id20240511080001",
    //   "sessionid20240511080001",
    //   "HomePage",
    //   "HectorBarbossa"
    // );
    clarity("set", "customer-id", "GD-123");
    clarity("set", "customer-name", "Jack Sparrow");
    clarity("set", "customer-interaction", "GD-ITC-1");
    console.log("clarity session was identified");
  }, []);

  const set = (key: string, value: string) => {
    const clarity = getClarity();
    console.log("setting...", key, value);
    clarity("set", key, value);
  };

  const event = (name: string) => {
    const clarity = getClarity();
    console.log("event...", name);
    clarity("event", name);
  };

  return { set, event };
};

export const MicrosoftClarityButton = ({
  type,
  text,
}: {
  type: "set" | "event";
  text: string;
}) => {
  const clarity = useMicrosoftClarity();

  if (!clarity) {
    return;
  }

  return (
    <>
      <button
        onClick={() => {
          console.log("button was clicked");
          console.log(clarity, "clarity");

          if (type === "event") {
            clarity.event("signup");
          }

          if (type === "set") {
            clarity.set("customer-origin", "signed-url");
            clarity.set("customer-dummy-meta", "wow");
            // clarity.set("id", "usr123");
            // clarity.set("userid", "usr123");
          }
        }}
      >
        {text}
      </button>
    </>
  );
};
