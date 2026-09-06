/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
    next/image defaults to quality 75, which re-encodes the hero painting from
    121KB down to ~15KB and flattens most of its tonal gradient — the exact
    thing that makes it read as paint rather than plastic. 95 lands at ~88KB,
    still smaller than the source file, and is visually transparent.

    Next 16 requires every quality used in the app to be declared here.
  */
  images: { qualities: [75, 90, 95] },
};
export default nextConfig;
