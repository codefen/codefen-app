/**
 *
 * Drawer
 *
 */

import React from 'react';


export default function Drawer() {
  return         <Drawer
  title='StudentCon'
  placement='left'
  closable={ false }
  onClose{() => 
       toggleMobileMenuOpen()
  }
  visible={ mobileMenuOpen }        
>
  <Menu>
    <Navigation />
  </Menu>
</Drawer>
}