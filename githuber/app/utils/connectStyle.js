import { connectStyle } from 'native-base';
import mapPropsToStyleNames from 'native-base/src/utils/mapPropsToStyleNames';

export default
(name, style, component) => connectStyle(name, style, mapPropsToStyleNames)(component);
