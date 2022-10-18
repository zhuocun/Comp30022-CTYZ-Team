import { Head, Html, Main, NextScript } from "next/document";

function MyDocument() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Mirza:wght@700&
        family=Poppins:wght@400&display=swap"
                    rel="stylesheet"
                />
                {/* fonts styles */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=EB+Garamond:wght@500&display=swap"
                    rel="stylesheet"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default MyDocument;
