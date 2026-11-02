import { useEffect, useState } from "react";

export default function useVideoAvailability(videoPath) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const controller = new AbortController();

    const checkVideo = async () => {
      try {
        const response = await fetch(videoPath, {
          method: "HEAD",
          signal: controller.signal,
        });
        const contentType = response.headers.get("content-type") || "";
        setStatus(
          response.ok && contentType.startsWith("video/mp4")
            ? "available"
            : "missing",
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(`Unable to check video asset "${videoPath}".`, error);
          setStatus("missing");
        }
      }
    };

    checkVideo();
    return () => controller.abort();
  }, [videoPath]);

  return [status, setStatus];
}
