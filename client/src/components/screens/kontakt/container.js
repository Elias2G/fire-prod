import React from 'react';

import { Beitritt } from './beitritt';
import { Map } from './map';

export const Container = () => (
  <div className="container-big">
    <div className="row bg-secondary-light shadow">
      <div className="column col-md-4">
        <Beitritt />
      </div>
      <div className="column col-md-8 nop">
        <Map />
      </div>
    </div>
  </div>
);
