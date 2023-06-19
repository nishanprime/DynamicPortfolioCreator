import React, { createContext, useEffect, useState } from 'react';

const FeatureFlagContext = createContext(null);
export const FeatureFlagContextProvider = ({ children }) => {
    const [featureFlags, setFeatureFlags] = useState(null);
    const setDefaultValues = () => {
        setFeatureFlags(JSON.parse(localStorage.getItem('featureFlags')));

    }
    useEffect(() => {
        setDefaultValues();

    }, []);


    return (
        <FeatureFlagContext.Provider value={{
            featureFlags,
        }}>
            {children}
        </FeatureFlagContext.Provider>
    )
}

export default FeatureFlagContext;