import React from 'react'
import { Parallax} from 'rc-scroll-anim';
import {Row,Col,Button} from 'antd';
import SecondBackground from '../pic.png'
import BackgroundVideo from '../vid1.mp4'

import {
    DownOutlined ,
    UpOutlined ,
} from '@ant-design/icons';


const Parts = ()=>
{
    return(
        <div>
            <Col offset={7} style={{postiton:'absolute'}}>
            <UpOutlined style={ { fontSize:50,color:"white",position:"absolute",left: 320,bottom:10 }} />
                <img src={SecondBackground}  style={{height:500,width:700,position:"absolute"}}/>
                 <DownOutlined style={ { fontSize:50,color:"black",position:"absolute",left: 320,top:500 }} />
                <Row style={{position:"absolute",left:150,top:380}}>
        <Col span={5}><Button  className="start-now" ><strong>Start Now</strong></Button></Col>
        <Col span={5}><Button   className="start-now" style={{left:320}} ><strong>Start Now</strong></Button></Col>
        </Row>
        </Col>
        </div>

    )
}
const Middle =()=>
{
  return (

<Row>

    <Col span={24} >
        <video autoPlay muted loop id="myVideo" className="video"
               style={{zIndex:'-1', width:'100%',
                   postion:'absoulte'
                 }}>
      <source src={BackgroundVideo} type="video/mp4"/>
      <source src={BackgroundVideo} type="video/ogg"/>

        Your browser does not support HTML5 video.

      </video>
        <Parallax animation={{ y:-700,playScale: [0, 1],ease:'easeInCubic' }}
          style={{transform: 'translateY(-500px)',  margin: '10px auto' }}
          >
              <Parts/>
        </Parallax>




</Col>

</Row>
  )
}
export default Middle;
