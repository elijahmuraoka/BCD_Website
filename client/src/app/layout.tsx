import './tailwind.css';
import Head from 'next/head';

export const metadata = {
    title: 'Big City Diner: No Diner Finer!',
    description:
        "Come join us at one of Hawaii's Top Voted Restaurants for over 25 years! Enjoy some local favorites such as our Guava BBQ Baby Back Ribs and Kimchee Fried Rice!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="./assets/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="./assets/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
