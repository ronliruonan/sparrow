import Base from '../Base';

export default class Input extends Base{
  name: string;
  params: any;

  constructor (attrs: any, componentIndex: number, params: any) {
    super(attrs, componentIndex);
    this.params = params;
    this.labelValue = '文本框';
    this.init();
  }

  private init () {
    const {type} = this.params;
    if (type === 'textarea') {
      this.attrs['type'] = 'textarea';
      this.attrs['rows'] = 4;
    }
  }

  public fragment () {
    return `
      <el-form-item label=" ">
        <label-box label="${this.labelValue}" indexcomp="${this.componentIndex}"></label-box>
        <el-input></el-input>
      </el-form-item>
    `;
  }
}