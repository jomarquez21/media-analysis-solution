import React from 'react';

export default class SrtTab extends React.Component {
  render() {
    return (
      <div>
        Download srt <a href={this.props.downloadUrl} download target="_blank">{this.props.downloadUrl}</a>
      </div>
    );
  }
}