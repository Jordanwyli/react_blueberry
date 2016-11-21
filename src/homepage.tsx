/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({}),
  (dispatch) => ({
    // nav: (url) => {
    //   let action = { type: 'NAV', parent: "homepage", page: url }; 
    //   dispatch(action);
    // }
  })
)

export class Homepage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepage__box">
                    <div className="homepage__box--title">
                        <h1>UC Berkeley IEEE</h1>
                    </div>
                    <div className="homepage__box--content">
                        <button className="content__button">Join</button>
                        <button className="content__button">Donate</button>
                    </div>
                </div>
            </div>
        );
    }
}
