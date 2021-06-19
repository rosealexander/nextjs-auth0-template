import {Provider} from 'react-redux'
import {store} from '../app/store'
import React from "react";
import Layout from "../features/layout/Layout";
import Head from "next/head";
import Router from "next/router";
import Loading from "../features/loading/Loading";
import {UserProvider} from "@auth0/nextjs-auth0";

const MyApp = ({Component, pageProps}) => {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
    }, []);

    // console.log('-----------------___APP', {pageProps});

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const start = () => setLoading(true);

        const end = () => setLoading(false);

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <>
            <Head>
                <title>next-template</title>
            </Head>
            <Provider store={store}>
                <UserProvider>
                    <Loading isLoading={loading}/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserProvider>
            </Provider>
        </>
    )
}

export default MyApp
