import React from 'react';
import HelmetMe from '../shared/HelmetMe';
import ResuemeTitle from './ResuemeTitle';
import Resume from './Resume';

const ResumePage = () => {
    return (
        <section>
            <HelmetMe>Resume</HelmetMe>
            <ResuemeTitle></ResuemeTitle>
            <Resume></Resume>
        </section>
    );
};

export default ResumePage;