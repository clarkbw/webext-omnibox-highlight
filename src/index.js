import { highlight as chrome, isChrome } from './chrome';
import { highlight as firefox } from './firefox';

const highlight = isChrome ? chrome : firefox;

export default highlight;
