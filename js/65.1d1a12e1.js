(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{641:function(n,e,t){"use strict";t.r(e),e.default='# Stepper \u6b65\u8fdb\u5668\n\n\n\n## \u57fa\u672c\u7528\u6cd5\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  state = {\n    value: 1,\n  };\n\n  render() {\n    return (\n      <>\n        <Cell\n          title="\u666e\u901a"\n          description={\n            <Stepper\n              value={this.state.value}\n              onInputChange={(value) => {\n                console.log(\'onInputChange:\', value);\n              }}\n              onChange={(value) => {\n                this.setState({\n                  value,\n                })\n                console.log(\'onChange:\', value);\n              }}\n            />\n          }\n        />\n\n        <Cell\n          title="\u8bbe\u7f6e\u9ed8\u8ba4\u503c"\n          description={\n            <Stepper defaultValue={2} />\n          }\n        />\n\n        <Cell\n          title="\u8bbe\u7f6e\u4e0a\u4e0b\u9650\uff08-3 ~ 3\uff09"\n          description={\n            <Stepper min={-3} max={3} />\n          }\n        />\n\n        <Cell\n          title="\u8bbe\u7f6e\u6b65\u957f"\n          description={\n            <Stepper step={5} />\n          }\n        />\n\n        <Cell\n          title="\u7981\u7528\u72b6\u6001"\n          description={\n            <Stepper disabled />\n          }\n        />\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u591a\u5f62\u72b6\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nReactDOM.render(\n  <>\n    <Cell\n      title="\u76f4\u89d2"\n      description={\n        <Stepper shape="rect" />\n      }\n    />\n\n    <Cell\n      title="\u5706\u5f62"\n      description={\n        <Stepper shape="circle" />\n      }\n    />\n  </>\n, mountNode);\n```\n\n\n\n## \u591a\u5c3a\u5bf8\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nReactDOM.render(\n  <Cell\n    title="\u5927\u53f7"\n    description={\n      <Stepper size="lg" />\n    }\n  />\n, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| shape | string | \'radius\' | \u5f62\u72b6\uff0c\u53ef\u9009\u503c `rect`, `radius`, `circle` |\n| size | string | \'md\' | \u5927\u5c0f\uff0c\u53ef\u9009\u503c `md`\u3001`lg` |\n| value | number | - | \u503c |\n| defaultValue | number | - | \u521d\u59cb\u503c |\n| min | number | - | \u6700\u5c0f\u503c |\n| max | number | - | \u6700\u5927\u503c |\n| step | number | 1 | \u6b65\u957f |\n| disabled | boolean | false | \u662f\u5426\u7981\u7528 |\n| onInputChange | (value?: number) => void | - | \u8f93\u5165\u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n| onChange | (value?: number) => void | - | \u503c\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n'}}]);
//# sourceMappingURL=65.1d1a12e1.js.map