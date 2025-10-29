import { ImageResponse } from "next/og";

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

// Apple icon component
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 80,
                    background: "#0E1A2B",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C4A552",
                    fontWeight: "bold",
                    fontFamily: "serif",
                }}
            >
                E&T
            </div>
        ),
        {
            ...size,
        }
    );
}
