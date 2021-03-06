/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Make certain components globally available in the Styleguide
 * without displaying in the sidebar
 */

// Common Libraries
import styled from 'styled-components';

// Styleguide components
import State from './State';
import CIDTable from './CIDTable';
import { Grid, Row, Col } from '../../packages/grid/src';

global.styled = styled;
global.State = State;
global.CIDTable = CIDTable;
global.Grid = Grid;
global.Row = styled(Row).attrs({
  alignItems: 'center'
})`
  /* stylelint-disable-line block-no-empty */
`;
global.Col = styled(Col)`
  margin-top: 4px;
  margin-bottom: 4px;
`;

/** Add aditional global for packages that override these components (Table) */
global.Layout = {
  Grid: global.Grid,
  Row: global.Row,
  Col: global.Col
};
