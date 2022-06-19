import React from 'react'
import { Header } from "./components/header/Header";

const MasterLayout = ({children}) => {
    return (
        <>
            <Header />

            <main>
                <div className="container">
                    { children }
                </div>
            </main>
        </>
    );

};

export { MasterLayout };