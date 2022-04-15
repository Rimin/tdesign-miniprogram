import { SuperComponent, wxComponent } from '../../common/src/index';
import BaseButtonGroup from '../base/button-group';

@wxComponent(BaseButtonGroup)
export default class ButtonGroup extends SuperComponent {
  behaviors = ['wx://form-field-button'];
}
