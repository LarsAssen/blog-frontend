import React from 'react'
import SubScribeForm from 'react-mailchimp-subscribe';

const SubscribeBox = () => {
    const formProps = {
        action:
          process.env.NEXT_PUBLIC_MAILCHIMP_URL,
        styles: {
          sending: {
            fontSize: 18,
            color: "auto"
          },
          success: {
            fontSize: 18,
            color: "green"
          },
          error: {
            fontSize: 18,
            color: "red"
          }
        }
      };
    
    return (
        <div>
            <SubScribeForm {...formProps}/>
        </div>
    )
}

export default SubscribeBox
