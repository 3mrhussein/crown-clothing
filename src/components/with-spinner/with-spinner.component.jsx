import React from 'react';

import { AnotherSpinnerContainer, SpinnerContainer,SpinnerOverlay } from './with-spinner.styles';


const WithSpinner = WrappedComponent =>({isLoading,...otherProps})=>{
   
    return isLoading? (<SpinnerOverlay><AnotherSpinnerContainer/><SpinnerContainer/></SpinnerOverlay>) :
    (<WrappedComponent {...otherProps}/>);
};

export default WithSpinner;