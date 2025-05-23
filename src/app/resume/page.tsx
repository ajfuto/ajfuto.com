"use client";

import React, { useEffect } from 'react';

const ResumePage: React.FC = () => {

    useEffect(() => {
        window.location.href = '/aj_futo_resume.pdf';
    }, []);

    return null; // or you can render a loading spinner or a message
};

export default ResumePage;