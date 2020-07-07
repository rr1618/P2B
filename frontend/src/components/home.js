import { Layout ,Row,Col,Button} from 'antd';
import React from 'react';
import TweenOne from 'rc-tween-one';
import Background from '../background.png';
import Middle from './secondpage'

import Logo from '../logo.png';
import {

    DownOutlined ,

} from '@ant-design/icons';
const { Header,Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (


        <Layout className="site-layout" >

          <Content
            className="site-layout-background"
            style={{
              minHeight: 700,
              height:700,
                width:'100%',
              backgroundImage: "url("+`${Background}`+")",
                zIndex:'5'
            }}
          >
            <Header className="site-header" style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
              <Row>
                <Col span={3}><div></div></Col>
                <Col span={6} className="navbar" style={{marginLeft:40}}>
                    <img className="center" src={Logo} style={{height:50}} alt=""/></Col>
        </Row>

</Header>

<Row>
  <Col span={10}>
    <Col style={{marginRight:20,marginTop:150}}>
      <h1 style={{textAlign:"right",fontSize:60,color:"white"}}><strong>Get Ready <br />For You<br/>Dream Career</strong></h1>
      <h4 style={{color:"white",textAlign:"right"}}>Learn, Grow and become leaders of Tomorrow</h4>
       <p style={{lineHeight:"20px",fontSize:17,textAlign:"right"}}>Python<br/>
      Data Structure<br/>
      Machine Learning<br/>
      Digital Marketing<br />
      Enterpreneurship<br/>
         Personal Development<br /></p>
      <Button className="homeButtons" size="large" style={{float:"right",marginTop:15,width:200,borderColor: "#fffff"}}>
          <strong>Enroll For Free</strong></Button>

    </Col>


  </Col>
  <Col className="strip" span={10} >

    <Col style={{marginTop: 150,marginLeft: 20 }}>
      <Button className="homeButtons" size="large" style={ {width:200,borderColor: "#fffff",marginBottom:10,color:"black" }} >
          <strong>Get Plan B Now</strong></Button>
      <p style={{lineHeight:"20px",fontSize:17}}>Website/App Development<br/>
      Digital Marketing<br/>
      Software Development<br />
      Project Management<br/>
      Tax Advisory<br />
      Sales and Marketing</p>

      <h4 style={{color:"white"}}>One Stop Solution to help Grow Your Business</h4>
      <h1 style={{fontSize:60}}><strong>Grow Your <br /> Business To <br/>10 Times</strong></h1>


    </Col>

  </Col>

</Row>

                <TweenOne
      animation={{
        y:'10px',
        repeat: -1,
        duration: 1000
      }}
    >
            <Col style={{marginLeft:760}}>
                <DownOutlined style={ { fontSize:60,color:"white",marginTop:10 }} />
</Col>
                </TweenOne>
<Middle/>


          </Content>

        </Layout>



    );
  }
}

export default Home
