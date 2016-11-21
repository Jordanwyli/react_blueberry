/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Donate extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1>Donations</h1>
            <div>
            IEEE is a non-profit organization that relies on donations to bring professional and social events to the entire EECS community at UC Berkeley. Any amount you are able to give is greatly appreciated, and all donations are tax-deductible. We use Stripe in conjunction with HTTPS to make sure your payment is secure. Thank you!
            </div>

            <p>
            IEEE Student Chapter<br />
            Moore Room<br />
            200 Cory Hall<br />
            Berkeley, CA 94720<br />
            <br />
            <p>

            <h1>Contact</h1>
            <p>
            We are located inside the Moore Room in Cory Hall, UC Berkeley. Any letters or packages can be addressed as follows:
            </p>
            </div>
        );
    }
}
