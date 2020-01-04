import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import buku from './foto/buku.png';
import coffee from './foto/coffee.png';
import music from './foto/music.png';
import travel from './foto/travel.png';
import binar from './foto/binar.jpg';
import dicoding from './foto/dicoding.png';
import aku from './foto/aku.jpg';
import dqlab from './foto/dqlab.png'
import telegram from './foto/telegram.png';
import {Button, NavLink} from 'reactstrap';

class TentangSaya extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="beranda-grid">
                    <Cell col={3}>
                        <div className="content-list">
                            <br/>
                            <br/>
                            <br/>
                            <img src={aku} alt="foto" className="foto-img-bg"/>
                            <h4 style={{marginTop:'50px'}} className="identity">Rachmat Gunawan</h4>
                            <hr
                                style={{
                                borderTop: '3px solid #833fb2'
                            }}/>
                            <p>Address :<br/>
                                KH Ahmad Junaedi Street, Bekasi, West Java, Indonesia</p>
                            <p>Email:
                                <br/>
                                rachmatgunawan@rachmatgunawan.com</p>
                                <p><a href="https://t.me/Nawan44"><img src={telegram} className="fotohoby" />Telegram</a></p>
                            <br/>
                            <br/>

                            <h4 className="hobi"> Hobbies </h4>
                            <hr style={{ borderTop: '3px solid #833fb2'}}/>

                            <p><img src={buku} className="fotohoby"/>Reading</p>
                            <p><img src={travel} className="fotohoby"/>Traveling</p>
                            <p><img src={coffee} className="fotohoby"/>Coffee</p>
                            <p><img src={music} className="fotohoby"/>Listening to Music</p>
                            <br/>
                            <br/>
                            <h4 style={{marginTop:'20px'}} className="judulblog">Blog
                            </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }}/>

                            <p><img src={buku} className="fotohoby"/>Travel</p>
                            <p><img src={buku} className="fotohoby"/>Experience</p>
                            
                        </div>
                    </Cell>

                    <Cell className="resume-right-col" col={9}>
                        <h3 className="judul">Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <p>2005 - 2008</p>
                            </Cell>
                            <Cell col={8}>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Vocational Secondary Schools 34 Jakarta</h5>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Automotive Mechanical Engineering</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <p>2013 - 2017</p>
                            </Cell>
                            <Cell col={8}>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>University Of Mercu Buana</h5>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Bachelor's Degree of Informatics</h5>
                            </Cell>
                        </Grid>

                        <hr
                            style={{
                            borderTop: '3px solid #e22947'
                        }}/>
                        <h3 className="judul">Non-Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src ={dicoding} height="100px" width="100px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Dicoding Academy</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Game Developer</h5>
                                <Button
                                    color="success"
                                    size="lg"
                                    style={{
                                    marginTop: '5px'
                                }}
                                    href="https://www.dicoding.com/users/84441">Visit Developer Page</Button>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <img
                                    src="data:image/png;base64,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"
                                    height="100px" width="100px"></img>

                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Indonesia Mobile-app Academy</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Android Developer</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                            <img src ={dqlab} height="100px" width="100px"></img>

                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>DqLab Academy</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Data Scientist</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <img src={binar} height="100px" width="100px"></img>

                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Binar Academy</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Front End Developer</h5>
                            </Cell>
                        </Grid>

                        <hr
                            style={{
                            borderTop: '3px solid #e22947'
                        }}/>
                        <h3 className="judul">Certifications</h3>
                        <Grid>
                            <Cell col={4}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACICAMAAABqWSYLAAAAhFBMVEX///8FBwjx8fEVFxd+f3+kpaXh4eFNTk/W1tZJSkteYGAxMzRTVVX8/Pz4+PgRExS0tLQmKCkdHh8uMDHU1NTKyssSFBWQkZKcnZ3q6+vd3d2EhYY6PDx0dXXCw8OWl5dsbW5DREVbXV2rq6wiJCVvcHG8vb0+P0CpqapSVFWKi4x5eno7DcNqAAAPUUlEQVR4nO2diXaqPNuGSSKDYAijEEBkUFQ8//P7E9BdCZO2fVv7f9xr7W0rGR4ukichUyVp0aJFixZJUrVRVVU2f9uMvyEZAQBW8LfN+BtaYL2gBdYLWmC9oAXWC1pgvaC/AgtGXJRGiiSZSkR/xYi/AqtGBBC0y4FBpfMBZL9ixF+B5QcFyYMyB44MMwCyXzHir8CSpNC5SlEOkJ6eCMl+xYQ/Bys3dJSj7FdM+GuwSEhIsnOyXzHhr8Ha+i44BgusGZWnQFL0RIkTy8rjXzHh78BS0kgy/cpUfEpT7VdM+Duw3kALrBe0wBIFqaIoFOKBS0/Awk30kfgTMiGPBgeGrHGT4IfoU5d+QFCr5FW22Wz01d7ye3nPwMLUt/arY8HiZ3E4EH88XlnvWKziWpepImCm8aaj4OOSIlzaPZnhd4haK9UGdzmnTI66ASZhYT/QEwd8xE/0ffpMleXxyD0WMYq6G0tRQUf6xyVt3b1kvHjDn5dZFS7pZu6s5c5jnoKl1CcEBCFDl+dwRfVp241FjOtjmXxHWNrRFe+V6dKpSuOwzErtoWp5X/ypXGGZD8Rzq4cg7wcLlolQqlqpymOoMVhYWTlDsbnIdTxXrGWD8WzrIdDbwYL1cLl4EpamD5JuYY17XZyehuO8NSwYCG7jNViKPopqChaujJE47wzL3I9Womdgwd14uZqCNVau3hoWLm0wpmdghaOoJ2F5l9E4bwxr/Ak/BcufiD4BS8nGy+P7wpr0OPOw4HWqEo7CMoOJaG8LywymbnUeVjrmpadh+YeJOG8LSxt3WM/AgvU0qxFY5nEqzrvCwqsha7f24UlYkdqLjNTjbpfl2ylY/mCjcLDJW8Oi/YK1VfeV75er5BlYvbsmahlRJs26OuOwsj4pI7Z8vwo36H1h1T0/m1SUjyphSGVjFhYuRVbZfYgFQ4+/zAzC0nrvoShuh8BMmhboTWHRRLzZywcerF2KGVim6LLUx6uwPJEhWDgW3xjs88ewHw7y94Qli7Vo3ZkKodbMqAMU69PjbTL5OhqApQg3CQ6dVb1mZz7mbWCZ4r3a5dRw8AAsoZPmKEIU5Tow6iC+MmyvE4OqbwNLy7u5kevkWN08LLd319TrJdNrgU9TY15vA0t8xEk6GXweFnlmQlMphIK1mlpa/y6wxEdMjtNzMk/4rNUTszpipz/pF74HvQss8RHb1XT4gdZQrFGONb8BQ+52V8hx2sg3geXn3cxOM5NXA/0sWYAFXHluBkzsbiBrMvi7wKoEl5XNhH+mBw8OWTpduKjYgk7TfRdYZ6E+7GfCP/duSIyr2IHoSBMGwPLpTN8Eljg6gyZnraRBWIPjUsRYaeOlyxfedWbmkd8EFrx285qpD8PjWZ7YG29lX/0xXJUQdKY8vwks0XnYc83+ECw8NgRvB9pgetgSAk7793eBpQhTBvlnYEl0dHJHPQ8VVXMvBJvuCL8LrEjI6/IpWFIk9NY+dNgNFK7eOHbUC9LRm8DyhJ509jlYPZs/tFWrXpo9WJNN5/vAEpql2VeV0en7zehUjd2jJTYr/2uwJBqPTnscKqFVFN+9/+dgSbBUxwqXIZStBRZL7Do2E7jpevD/J7CuX4ElQasYXreEgk5F7A1U/A1YmtAaFl+CJWF6Xg/WxbwzXvVHW0OxU6p+DRaf/bLyoZVe4WPCPVh/pAcv9CaNr8JiosHAesvisSePwz8JiwoLDj71Ii0Kp33X5XZG5v/mizSMu3l9ZohmQNFKpEU6CYvjhdOjyu8CS6wQW3kmwpN7d2jvZbEzGym+Za2nU3sTWJIlPONsJvyzG500scvV8fDi4Orhbwwr+8JKh2SmFX8WVm+ie//Y0xJfDv/IhEW06WbmzNTDZ2H15nziR1g4FNpLfXKCQ4T10Bv8UVimOACgT9eIgakwOtTdwGch3W4fXpxUMiYbFhGW+mHjz07fi4to7HI6eH9Gej+0kwmLg6EdnyVpwu2T61TRgkJzkX+8aopu5PTMPX9aYm5An/RaQ2sd7LhfGk2xOexuLjN3wmV3ciZcePFOPsphKjQkxVM3/VmJTw2gulNQsDmzhQ7qgFx68zi9mVehnvVWhW2660m6G1qF1gKF/6wTXaMu/afqTc04j8vK6LmeW8zGH/tB7nouKu6dcIW1Nb3FbCB7KNHQv3ZKWiD0cbO7TVRsdOvPg3hGilgPgRPeYZj+Ec2tKW0Hp4hufeDCUSa+TG/Eyr0S3x9Jdh+ZML3a7qwp7ZVD12rzwmItJOdvYTKu/v4ItON3jpUqTuZXK99H8ux/W4TpedMbeKh79bQ/Cq3KkclL1X5NuquVpVRcrbtp54zEcYDnFod9RQML0omr6pmuNnuAn4XFtwhngWyd60t/wLS/kskc2ALjrIvVsUh4Fl1Y/UXCagn5WKP4nJP/+hCFXme7q+dhMSHn4AwNlg703vzBQdX73Xdh4T7ZQ3JK+g9lcgHht2igRnwW1ogOA4t6p59RF5ZUjmyzFURmpra/QWZ/28D3wiK7odoxuWVIgEVn9lLdVPzAGRjR+CbJb4GVD64YhWKHYAKWNLlx7S5nclX6NwlbEw/u67CckTeoqW2OIqzomaI1/fLxXYLB+L7dr8OKR7wuntgBK8Iy92Mb3j+UpD9QsJhgbxz4+2Blo45kokSLsCQqvk32o4Q/dUw9HN2v/EVYaDdRN/DoJtgeLCmaODmC6xD+TLniosMndzwBSxwR6950Pd1AjR3s0IclRdlU/8EOB1L/zwTroZNo5mFhPxuOyLUuZ7rUuBpeTjIAS6L1aGeDrH/4T0UMr1Qg2dzBPZhW1+Hy4ez82aqBtdUQAmOoe2laxXDxN2Lv5+rgzW7lLC5pJ+sweuJIKOqH/Un7w9F6qo8I0534kJzd8LFbWLGy/jtOUvu/ca4epuk1cdCWMG3RQa1TKpTusQkLk3phZvyL6hjZOXr6HDuoBRe7jUqQkxzL8agYKtbu5KAmNMvH1WtftPHnhLGShlyyT3Hf5InZHYxNJZWbqFVkDsSdzJV6TdSwimZjYgy9qsknZYF/uv69oOU0yRe0wHpBC6wXtMB6QQusF7TAekELrBe0wHpBC6wXtMB6QQusF7TAekELrBe0wHpBC6wXtMB6QQusF7TAekGlYdt2sMB6SrRiit543HvRokWLFi1atGjRnxDW0tQzWf9S46Ltp4Jx+zv7QmH/YNR8a1J2xWx+1sz281/vHXppGpkSbr7lu26on/oUS5D/ovxL+CGnNnuFB3uwg2XFIrT/NyGbNBT+CzUVrU29TUK5G3uzIIpMzHNqbOHfdiz9hkXx2FJdO9+bUrnmkqW9yj6KEsrr2xe7SyhZBf95RWX2T8maC0rzqda3lYA0ONnupjJhc1VXJO2a2MlOk/x15knHiyxZG55wCHGT06XdfY39zLCTWJFwebOjKtaFJ6U6T2PPczj6uEkj2Mjasclajxrj1Lo1uritJ0wLXaHxOsS0ZrboKZY6ll6/vuuJnsgpJwdfqsHWdt29lAFn7QAj2rsOAAf2xYlcpT0C7GKmxEBVNBc4rutGkQuMnKDbSu3yAC4G2CjUAMh18wiuyKFApIYWX7aXkBVPY23zo8YCQA6u0f69S5oR90IcWVIMkqvbQ8r3xyFZCgiwGWPg5A7QFYufHp6hlVe4W7B1VW0FCLPnKgXM2MN9K2vp2J6yAVfzjFBh8GXwjS0ut9g4zZ3W/ows5FqWQUIGS618X2Gwci1wtr7iBwcksy9aWNvU9yOzhYVi3/dNBivWdLBud8pdQaKFyPUZrMz3PVNTwcrTQaE8wEKebIM9DEBy5jlxpQbYezk4wnLrWh7PisEiK3gELayTFwPXv8OCmr8Gqu/BFThZzB4G6+LL6Lat8A4LxiD39xyhQXRuKYNVe5v+JseXFZJTRK8bi8EqIgpNBks1LZsfrNL+f4OFFEpN6QYrpBRiBovVz/uJ8VdwSGnEvJoBVuwq32xtQVmN6SMs6J8aWHlKbxt5LQelMFD3cE9yRdKJzmA5QNUuN1hrs0QovcNiEYpmK+8KqB5lziwABfUdVHZhrYBRcVsYrCu3lMEKzd03wFoRlS+ewwwWShLVYrDcYA1yKMACSZIE8FYN7SQpaAMrAm67kPhsA5RZlO9BcthVFhloTboPsEigE9tn1XBrJOt2y+GZlZsm2A5cuDE5g2UcEtlwtw2sxNqwIjsACxlJ7jNYSbwBa68Dy5QR2GYVc+itLZRZrNc2Gtva8bxYQWp/qAFxHKNkXxCHNFtNu7Acx4nvsJDj5EoDSwGH9rHCOiEAsQdp8HRO3Ie1DvXRZ7GEdcqPy0LOnTGH1drRwEo4rI2bocJpYAG+pB0OwGKZ2CmDRRCvtR1YzMEnW4BWVGpsyTkshAaXh7+omKxZSxjzanjay2XErDbCgvA/PdGBRUJZ9m8+i2SybMEGls9KPE8G08iKE7C1GKwNuypVLvAkLw4fqyEJj1vES5Yby+e2TpQMFk5ji7UHFyxdWTFnsGLkkqvdwLJXtQWlAVhGIMuUwTrts/tfvPhXsqhn1Qkv8ga5MFu4z8pCgxy/7OCZz1Kgyu6lBnqTGC9qpb3t+azm4s1nNQ61gVXemiIaqyFkvjlQDBDzL5h3ssw9c/9dn5WAM/NZ63+b6CxnmzJvnlHms6hUND7LqFhx2rs3n9WE4rDW5BFW+9eAAlZSfXCwOrAaWyywDRksHoX/BSQZH7/BZ1nIttKH1hBzWJW7Tadg3VvDlV/ctlxA9nxp6YCybQ19GqngqvDWsAKHc+SSuEnDW4Pg1hq2jajPWkPNADtobe3SS1gwBss7gHX5CCsFTqi42/oBVn5rDXXq2U4Lq+Ktdw5ilu0mSvk5OgZpbPE4rDvfrwiyrhIihsJ9FkLoSFtYpJqA1YTUIv65tW8bilinwEEk8bjPQsguce0w3+eEJk0IYv02r0lDW4Macp+FUHs+Bat+7Kpd3uywIw5L24AsfYRFc7J1SOPd7rBYEk7WwOJtXWMDvJAtIk5q7reE2XLRpMYWZDWwmOkzZzY/IS9T1cLHUqlyBXB/WUkR73FLvl7w5He8910UjdVnlffgm5BK83m8H2drhhv1svMxPPKLRSrR/UbdhFDCKc+As2dpsBoSQ6uJH7fxlPqiFmcs4caOCkuVfqShWioZ61SG6u2k1OZi05LUKi9fcpNELVlqDZUj63k0oaImlNlkrV5ZVW9sUVNmaSWlajZ3ztyiRYsW/Tn9H4B3NeCaq4Y0AAAAAElFTkSuQmCC"
                                    height="70px" width="100px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>EC-Council</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Certified Secure Computer User v2</h5>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>ECC78814255628</h5>


                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <img
                                    src="data:image/png;base64,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"
                                    height="70px" width="100px"></img>

                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Microsoft</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>Microsoft Technology Associate - Database Administration Fundamentals</h5>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>EoCo - XLRq</h5>
                            </Cell>
                        </Grid>

                        <hr
                            style={{
                            borderTop: '3px solid #e22947'
                        }}/>
                        <h3 className="judul">Experience</h3>
                        <Grid>
                            <Cell col={4}>
                                <p>2008 - 2010</p>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Toyota Motor Manufacturing Indonesia </h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Press & Welding Division</h5>

                            </Cell>
                            <Cell col={4}>
                                <p>2011 - 2012</p>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Astra Honda Motor</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Die Casting Department</h5>

                            </Cell>
                            <Cell col={4}>
                                <p>2013 - 2015</p>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Mesin Isuzu Indonesia</h4>
                                <h5
                                    style={{
                                    marginTop: '0px'
                                }}>
                                    Assembly Department</h5>

                            </Cell>
                            <Cell col={4}>
                                <p>2016 - Now</p>
                            </Cell>
                            <Cell col={8}>
                                <h4
                                    style={{
                                    marginTop: '0px'
                                }}>Ministry of Agrarian and Spatial Planning / National Land Agency</h4>
                             

                            </Cell>

                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default TentangSaya;
