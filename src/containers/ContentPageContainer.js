
import Head from 'next/head';
import React, {
  Fragment,
  Component,
} from 'react';
import { findPost } from 'content';
import Content from 'components/Content';


class ContentContainer extends Component {
  static async getInitialProps(props) {
    return {
      id: props.query.id,
    };
  }

  render() {
    const { id } = this.props;
    const { Doc, title } = findPost(id);
    return (
      <Fragment>
        <Head>
          <title>{title || ''}</title>
        </Head>
        <Content Doc={Doc} />
      </Fragment>
    );
  }
}

export default ContentContainer;
