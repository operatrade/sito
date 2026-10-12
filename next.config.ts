import type { NextConfig } from "next";

// The home page "/" sends each visitor to their browser language, or to English when we don't have it.
// Header values are matched as ^value$, and the first matching rule wins.
const browserLanguages = ["it", "ru", "az", "sq", "en"];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      ...browserLanguages.map((code) => ({
        source: "/",
        has: [{ type: "header" as const, key: "accept-language", value: `\\s*${code}(?:[-_,;].*)?` }],
        destination: `/${code}`,
        permanent: false,
      })),
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;
