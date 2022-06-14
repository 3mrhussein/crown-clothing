import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children,...otherProps }) => (

    <CustomButtonContainer {...otherProps} >{children}</CustomButtonContainer>
    // <button className={`${inverted ? 'inverted' : ''} 
    //     ${isGoogleSignIn ? 'googleSignIn' : ''} 
    //         custom-button`}
    //     {...otherProps}>
    //     {children}
    // </button>
);


export default CustomButton;