import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
//import logo from './logo.svg';


/* eslint-disable */

class App extends Component {


    render() {

        return (
            <div className="App">
                <div className="img-">
                    <a className="img-" href="https://mp.weixin.qq.com/s/7twNRlDCRyC7jRwm8v4hZA">
                        <img className="img" src="https://i.imgur.com/oJGcq5e.jpg"/>
                    </a>
                </div>

                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-6 col-md-4 card">*/}
                {/*            asdfsadfasdfdsaf*/}
                {/*        </div>*/}

                {/*        <div className="col-1 card">*/}
                {/*            adsfasdfdsafsadf*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="card-container">
                    <div className="card">
                        <a className="img-" href="https://mp.weixin.qq.com/s/QdAF6p-kMBbXRLhf_drbjw">
                            <img className="img" src="https://imgur.com/9EhRAAS.png"/>
                        </a>
                    </div>
                    <div className="card">
                        <a className="img-" href="https://mp.weixin.qq.com/s/LAamxbafWC-QHWH_Wy57cA">
                            <img className="img" src="https://imgur.com/pnXf6CG.png"/>
                        </a>
                    </div>
                    <div className="card">
                        <a className="img-" href="https://mp.weixin.qq.com/s/wFpkqj_JarRR37uA1GaQug">
                            <img className="img" src="https://imgur.com/zrvSS7k.png"/>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;