import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import me from './foto/sea.JPG';
import gitlab from './foto/gitlab.png';
import github from './foto/github.png';
import playstore from './foto/playstore.png';
import instagram from './foto/instagram.png';
import linkedin from './foto/linkedin.png';
import medium from './foto/medium.png';
import { Badge } from 'reactstrap';

class Beranda extends Component {
    render() {
        return (
            <div >
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src={me} alt="foto" className="foto-img-bg"/>
                        <br/>
                        <div className="kutipan">
                            <Badge className="badgekutipan">
                            <h4  className="kutipan" >
                               "One’s destination is never a place, but a new way of seeing things.”
                            </h4>
                            <h4 className="kutipan">- Henry Miller -</h4>
                            </Badge>
                        </div>
                        <div className="banner-text">
                            <h1>Magician</h1>
                            <hr/>
                            <br></br>
                            <p  style={{color:"black"}}>
                                <h5>HTML/CSS | Unity | JavaScript | React | Android | C# </h5></p>
                            <hr/>
                            <div className="social-links">
                                <a href="https://www.instagram.com/nawan44" target="blank" rel="nofollow">
                                    <img src={instagram} alt="foto" className="logo"/>
                                </a>
                                <a href="https://www.linkedin.com/in/rachmat-gun" target="blank" rel="nofollow">
                                    <img src={linkedin} alt="foto" className="logo"/>
                                </a>
                                <a href="https://www.github.com/nawan44" target="blank" rel="nofollow">
                                    <img src={github} alt="foto" className="logo"/>
                                </a>
                                <a href="https://play.google.com/store/apps/dev?id=8037692933857434579" target="blank" rel="nofollow">
                                    <img src={playstore} alt="foto" className="logo"/>
                                </a>
                                <a href="https://medium.com/@nawan44" target="blank" rel="nofollow">
                                    <img src={medium} alt="foto" className="logo"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Beranda;