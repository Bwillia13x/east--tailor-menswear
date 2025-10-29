import { ImageResponse } from "next/og";

// Image metadata
export const alt = "East & Tailor - Heritage menswear";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

// Open Graph image component
export default async function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: "linear-gradient(135deg, #0E1A2B 0%, #1A2838 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FAF7F0",
                    fontFamily: "serif",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            background: "#C4A552",
                            borderRadius: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "40px",
                            color: "#0E1A2B",
                            fontWeight: "bold",
                        }}
                    >
                        E&T
                    </div>
                    <div
                        style={{
                            fontSize: "72px",
                            fontWeight: "600",
                            color: "#FAF7F0",
                        }}
                    >
                        East & Tailor
                    </div>
                </div>
                <div
                    style={{
                        fontSize: "36px",
                        color: "#C4A552",
                        fontWeight: "600",
                        letterSpacing: "0.05em",
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                >
                    Eastern heritage, tailored for modern icons
                </div>
                <div
                    style={{
                        fontSize: "24px",
                        color: "rgba(250, 247, 240, 0.7)",
                        textAlign: "center",
                        maxWidth: "800px",
                    }}
                >
                    Bespoke wardrobes crafted from regenerative natural fibres by master artisans
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
