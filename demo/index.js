import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 基础示例","code":"/**\r\n*\r\n* @title 基础示例\r\n* @description 基础示例\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\nimport AcTips from 'ac-tips';\r\n\n\r\n\r\nlet count = 1;\r\nclass Demo1 extends Component {\r\n\r\n    success=()=>{\r\n        AcTips.create({\r\n            type:'success',\r\n            content:\"success\"\r\n        })\r\n    }\r\n    error=()=>{\r\n        AcTips.create({\r\n            type:'error',\r\n            content:\"error\"+count.toString()\r\n        })\r\n        count++;\r\n    }\r\n    info=()=>{\r\n        AcTips.create({\r\n            type:'info',\r\n            content:\"info\"\r\n        })\r\n    }\r\n    warning=()=>{\r\n        AcTips.create({\r\n            type:'warning',\r\n            content:\"warning\"\r\n        })\r\n    }\r\n    destoryAll=()=>{\r\n        AcTips.destoryAll();\r\n    }\r\n\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Button\r\n                    colors=\"success\"\r\n                    onClick={this.success}>\r\n                    success\r\n                </Button>\r\n                <Button\r\n                    colors=\"danger\"\r\n                    onClick={this.error}>\r\n                    error\r\n                </Button>\r\n                <Button\r\n                    colors=\"info\"\r\n                    onClick={this.info}>\r\n                    info\r\n                </Button>\r\n                <Button\r\n                    colors=\"warning\"\r\n                    onClick={this.warning}>\r\n                    warning\r\n                </Button>\r\n                <Button\r\n                    onClick={this.destoryAll}>\r\n                    destoryAll\r\n                </Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo1","desc":" 基础示例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
