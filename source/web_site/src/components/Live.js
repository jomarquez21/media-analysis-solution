import React from 'react';
import VideoPlayer from './VideoPlayer';
import { withAuthenticator } from 'aws-amplify-react';
import {Container, Row, Col} from 'reactstrap';

class Live extends React.Component {
  render() {

    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [{
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL',
      }]
    };

    return (
      <Container>
        <Row>
          <Col xs="12" >
            <h1 className="font-size--35">Live streaming</h1>
            <VideoPlayer
              {...videoJsOptions}
              style={{height: '300px', width: '100%', maxHeight: '400px', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto'}}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withAuthenticator(Live);