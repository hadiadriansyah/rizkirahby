import React from 'react'
import { ConfirmationDialog } from '../partials/modals/ConfirmationDialog';
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

            <ConfirmationDialog />
        </>
    );

};

export { MasterLayout };