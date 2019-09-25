/**
 *
 * IssuesPage
 *
 */

import React from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectIssuesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';

import background from 'images/background.svg';

const stateSelector = createStructuredSelector({
  issuesPage: makeSelectIssuesPage(),
});

function IssuesPage() {
  useInjectReducer({ key: 'issuesPage', reducer });
  useInjectSaga({ key: 'issuesPage', saga });

  /* eslint-disable no-unused-vars */
  const { issuesPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <>
      <Helmet>
        <title>IssuesPage - codefen.com</title>
        <meta name="description" content="Description of IssuesPage" />
      </Helmet>

      <div style={{ backgroundImage: `url(${background})` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nisl
        lorem. Vivamus maximus lacus magna, eu posuere purus pharetra sed.
        Vivamus maximus libero ac ultricies luctus. Duis sed magna sed ipsum
        dictum tempor quis sed est. Praesent elementum metus vitae elit finibus,
        pulvinar vehicula augue ornare. Mauris cursus arcu in elit sollicitudin,
        non aliquam purus malesuada. Aliquam eleifend est ut lacus aliquam, nec
        sollicitudin mauris imperdiet. Pellentesque aliquam, eros a convallis
        tincidunt, quam quam mattis odio, vitae ultrices felis nisl a lorem.
        Aenean sed tortor ut urna iaculis lacinia id vel dui. Fusce porta
        consectetur est at congue. Sed euismod purus non semper maximus. Quisque
        laoreet mattis tellus. Praesent placerat lorem at risus iaculis
        imperdiet. Nullam quam elit, viverra eu luctus non, congue dapibus
        augue. Fusce pellentesque eros ut dignissim venenatis. Donec interdum
        finibus euismod. Praesent elementum diam eros, feugiat molestie mauris
        luctus gravida. Donec quis fringilla elit, eget viverra ligula. Donec
        sit amet magna diam. Morbi auctor maximus accumsan. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Phasellus nec aliquet lorem. Nam vel sem mauris. Sed blandit leo ut
        felis consectetur, a efficitur felis feugiat. Curabitur varius lorem
        bibendum neque placerat consectetur. Maecenas mattis bibendum ex vitae
        dictum. Donec tristique justo sit amet nisi ornare, id efficitur dolor
        venenatis. Aenean interdum justo purus, sit amet varius eros lacinia
        eget. Donec egestas turpis eget semper pellentesque. Donec lacinia dolor
        nec lectus congue, quis sollicitudin neque tincidunt. Nam massa nisl,
        lobortis sed mi ac, tincidunt lobortis nulla. Vivamus quis justo ut diam
        sollicitudin commodo. Nulla fringilla ullamcorper turpis, mollis
        elementum mi lobortis vel. Curabitur vehicula condimentum mauris, non
        tempor risus aliquam egestas. Aenean lacinia facilisis nibh, eu
        tincidunt mi consectetur et. Mauris fringilla mauris feugiat aliquet
        egestas. Phasellus imperdiet neque hendrerit, ultrices eros vitae,
        consectetur sapien. Sed non tristique velit. Curabitur semper diam
        accumsan pulvinar interdum. Donec eros lorem, ornare sit amet semper et,
        fringilla id ante. Fusce finibus neque tempus tempus aliquam.
        Suspendisse commodo risus ut lacus egestas, sed tincidunt nunc porta.
        Nulla et sapien metus. Aliquam posuere erat ut convallis fermentum.
        Donec et viverra ex. Aliquam eget velit lacus. Duis pulvinar lobortis
        orci, eget fermentum odio consectetur et. Aliquam cursus odio non mi
        rhoncus, quis vestibulum eros tempor. Maecenas sed magna quis quam
        scelerisque sodales eu et mauris. Nunc a volutpat leo. Mauris nec
        rhoncus ante, at pretium neque. Ut vitae nunc lectus. Maecenas vel
        blandit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc et nisl lorem. Vivamus maximus lacus magna, eu posuere purus
        pharetra sed. Vivamus maximus libero ac ultricies luctus. Duis sed magna
        sed ipsum dictum tempor quis sed est. Praesent elementum metus vitae
        elit finibus, pulvinar vehicula augue ornare. Mauris cursus arcu in elit
        sollicitudin, non aliquam purus malesuada. Aliquam eleifend est ut lacus
        aliquam, nec sollicitudin mauris imperdiet. Pellentesque aliquam, eros a
        convallis tincidunt, quam quam mattis odio, vitae ultrices felis nisl a
        lorem. Aenean sed tortor ut urna iaculis lacinia id vel dui. Fusce porta
        consectetur est at congue. Sed euismod purus non semper maximus. Quisque
        laoreet mattis tellus. Praesent placerat lorem at risus iaculis
        imperdiet. Nullam quam elit, viverra eu luctus non, congue dapibus
        augue. Fusce pellentesque eros ut dignissim venenatis. Donec interdum
        finibus euismod. Praesent elementum diam eros, feugiat molestie mauris
        luctus gravida. Donec quis fringilla elit, eget viverra ligula. Donec
        sit amet magna diam. Morbi auctor maximus accumsan. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Phasellus nec aliquet lorem. Nam vel sem mauris. Sed blandit leo ut
        felis consectetur, a efficitur felis feugiat. Curabitur varius lorem
        bibendum neque placerat consectetur. Maecenas mattis bibendum ex vitae
        dictum. Donec tristique justo sit amet nisi ornare, id efficitur dolor
        venenatis. Aenean interdum justo purus, sit amet varius eros lacinia
        eget. Donec egestas turpis eget semper pellentesque. Donec lacinia dolor
        nec lectus congue, quis sollicitudin neque tincidunt. Nam massa nisl,
        lobortis sed mi ac, tincidunt lobortis nulla. Vivamus quis justo ut diam
        sollicitudin commodo. Nulla fringilla ullamcorper turpis, mollis
        elementum mi lobortis vel. Curabitur vehicula condimentum mauris, non
        tempor risus aliquam egestas. Aenean lacinia facilisis nibh, eu
        tincidunt mi consectetur et. Mauris fringilla mauris feugiat aliquet
        egestas. Phasellus imperdiet neque hendrerit, ultrices eros vitae,
        consectetur sapien. Sed non tristique velit. Curabitur semper diam
        accumsan pulvinar interdum. Donec eros lorem, ornare sit amet semper et,
        fringilla id ante. Fusce finibus neque tempus tempus aliquam.
        Suspendisse commodo risus ut lacus egestas, sed tincidunt nunc porta.
        Nulla et sapien metus. Aliquam posuere erat ut convallis fermentum.
        Donec et viverra ex. Aliquam eget velit lacus. Duis pulvinar lobortis
        orci, eget fermentum odio consectetur et. Aliquam cursus odio non mi
        rhoncus, quis vestibulum eros tempor. Maecenas sed magna quis quam
        scelerisque sodales eu et mauris. Nunc a volutpat leo. Mauris nec
        rhoncus ante, at pretium neque. Ut vitae nunc lectus. Maecenas vel
        blandit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc et nisl lorem. Vivamus maximus lacus magna, eu posuere purus
        pharetra sed. Vivamus maximus libero ac ultricies luctus. Duis sed magna
        sed ipsum dictum tempor quis sed est. Praesent elementum metus vitae
        elit finibus, pulvinar vehicula augue ornare. Mauris cursus arcu in elit
        sollicitudin, non aliquam purus malesuada. Aliquam eleifend est ut lacus
        aliquam, nec sollicitudin mauris imperdiet. Pellentesque aliquam, eros a
        convallis tincidunt, quam quam mattis odio, vitae ultrices felis nisl a
        lorem. Aenean sed tortor ut urna iaculis lacinia id vel dui. Fusce porta
        consectetur est at congue. Sed euismod purus non semper maximus. Quisque
        laoreet mattis tellus. Praesent placerat lorem at risus iaculis
        imperdiet. Nullam quam elit, viverra eu luctus non, congue dapibus
        augue. Fusce pellentesque eros ut dignissim venenatis. Donec interdum
        finibus euismod. Praesent elementum diam eros, feugiat molestie mauris
        luctus gravida. Donec quis fringilla elit, eget viverra ligula. Donec
        sit amet magna diam. Morbi auctor maximus accumsan. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Phasellus nec aliquet lorem. Nam vel sem mauris. Sed blandit leo ut
        felis consectetur, a efficitur felis feugiat. Curabitur varius lorem
        bibendum neque placerat consectetur. Maecenas mattis bibendum ex vitae
        dictum. Donec tristique justo sit amet nisi ornare, id efficitur dolor
        venenatis. Aenean interdum justo purus, sit amet varius eros lacinia
        eget. Donec egestas turpis eget semper pellentesque. Donec lacinia dolor
        nec lectus congue, quis sollicitudin neque tincidunt. Nam massa nisl,
        lobortis sed mi ac, tincidunt lobortis nulla. Vivamus quis justo ut diam
        sollicitudin commodo. Nulla fringilla ullamcorper turpis, mollis
        elementum mi lobortis vel. Curabitur vehicula condimentum mauris, non
        tempor risus aliquam egestas. Aenean lacinia facilisis nibh, eu
        tincidunt mi consectetur et. Mauris fringilla mauris feugiat aliquet
        egestas. Phasellus imperdiet neque hendrerit, ultrices eros vitae,
        consectetur sapien. Sed non tristique velit. Curabitur semper diam
        accumsan pulvinar interdum. Donec eros lorem, ornare sit amet semper et,
        fringilla id ante. Fusce finibus neque tempus tempus aliquam.
        Suspendisse commodo risus ut lacus egestas, sed tincidunt nunc porta.
        Nulla et sapien metus. Aliquam posuere erat ut convallis fermentum.
        Donec et viverra ex. Aliquam eget velit lacus. Duis pulvinar lobortis
        orci, eget fermentum odio consectetur et. Aliquam cursus odio non mi
        rhoncus, quis vestibulum eros tempor. Maecenas sed magna quis quam
        scelerisque sodales eu et mauris. Nunc a volutpat leo. Mauris nec
        rhoncus ante, at pretium neque. Ut vitae nunc lectus. Maecenas vel
        blandit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc et nisl lorem. Vivamus maximus lacus magna, eu posuere purus
        pharetra sed. Vivamus maximus libero ac ultricies luctus. Duis sed magna
        sed ipsum dictum tempor quis sed est. Praesent elementum metus vitae
        elit finibus, pulvinar vehicula augue ornare. Mauris cursus arcu in elit
        sollicitudin, non aliquam purus malesuada. Aliquam eleifend est ut lacus
        aliquam, nec sollicitudin mauris imperdiet. Pellentesque aliquam, eros a
        convallis tincidunt, quam quam mattis odio, vitae ultrices felis nisl a
        lorem. Aenean sed tortor ut urna iaculis lacinia id vel dui. Fusce porta
        consectetur est at congue. Sed euismod purus non semper maximus. Quisque
        laoreet mattis tellus. Praesent placerat lorem at risus iaculis
        imperdiet. Nullam quam elit, viverra eu luctus non, congue dapibus
        augue. Fusce pellentesque eros ut dignissim venenatis. Donec interdum
        finibus euismod. Praesent elementum diam eros, feugiat molestie mauris
        luctus gravida. Donec quis fringilla elit, eget viverra ligula. Donec
        sit amet magna diam. Morbi auctor maximus accumsan. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Phasellus nec aliquet lorem. Nam vel sem mauris. Sed blandit leo ut
        felis consectetur, a efficitur felis feugiat. Curabitur varius lorem
        bibendum neque placerat consectetur. Maecenas mattis bibendum ex vitae
        dictum. Donec tristique justo sit amet nisi ornare, id efficitur dolor
        venenatis. Aenean interdum justo purus, sit amet varius eros lacinia
        eget. Donec egestas turpis eget semper pellentesque. Donec lacinia dolor
        nec lectus congue, quis sollicitudin neque tincidunt. Nam massa nisl,
        lobortis sed mi ac, tincidunt lobortis nulla. Vivamus quis justo ut diam
        sollicitudin commodo. Nulla fringilla ullamcorper turpis, mollis
        elementum mi lobortis vel. Curabitur vehicula condimentum mauris, non
        tempor risus aliquam egestas. Aenean lacinia facilisis nibh, eu
        tincidunt mi consectetur et. Mauris fringilla mauris feugiat aliquet
        egestas. Phasellus imperdiet neque hendrerit, ultrices eros vitae,
        consectetur sapien. Sed non tristique velit. Curabitur semper diam
        accumsan pulvinar interdum. Donec eros lorem, ornare sit amet semper et,
        fringilla id ante. Fusce finibus neque tempus tempus aliquam.
        Suspendisse commodo risus ut lacus egestas, sed tincidunt nunc porta.
        Nulla et sapien metus. Aliquam posuere erat ut convallis fermentum.
        Donec et viverra ex. Aliquam eget velit lacus. Duis pulvinar lobortis
        orci, eget fermentum odio consectetur et. Aliquam cursus odio non mi
        rhoncus, quis vestibulum eros tempor. Maecenas sed magna quis quam
        scelerisque sodales eu et mauris. Nunc a volutpat leo. Mauris nec
        rhoncus ante, at pretium neque. Ut vitae nunc lectus. Maecenas vel
        blandit sem.
      </div>
    </>
  );
}

IssuesPage.propTypes = {};

export default IssuesPage;
