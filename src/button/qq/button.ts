import { SuperComponent, wxComponent } from '../../common/src/index';
import BaseButton from '../base/button';
import props from './props';

@wxComponent(BaseButton)
export default class Button extends SuperComponent {
  // 组件的对外属性
  properties = props;

  behaviors = ['wx://form-field'];

  methods = {
    addfriend(e) {
      this.triggerEvent('addfriend', e.detail);
    },
    addgroupapp(e) {
      this.triggerEvent('addgroupapp', e.detail);
    },
  };
}
