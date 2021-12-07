import { ErrorContainer, ErrorTitle } from './style';
import React from 'react';

function Error() {
    return (
        <ErrorContainer>
            <ErrorTitle>Oups</ErrorTitle>
            <ErrorTitle>{`Il semblerait qu'il y ait un problème!`}</ErrorTitle>
        </ErrorContainer>
    );
}

export default Error;
