import "@/styles/index.css";
import "@/styles/transitions.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
