import { SelectorIntrument } from '@/widgets/SelectorIntrument';
import React from 'react';

const ConstructorWelcomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                background: '#fff',
            }}
        >
            <SelectorIntrument />
        </div>
    );
};

export default ConstructorWelcomePage;
