import React from 'react'
import { MasterLayout } from "../../tools/layout/MasterLayout";
import { PrivateRoutes } from "./PrivateRoutes";

const Routes = () => {
    return (
        <MasterLayout>
          <PrivateRoutes />
        </MasterLayout>
    );
}


export { Routes }