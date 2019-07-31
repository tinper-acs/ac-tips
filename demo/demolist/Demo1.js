/**
*
* @title 这是标题
* @description 这是描述
*
*/
import React, { Component } from 'react';
import NcToast from '../../src';
import Button from 'bee-button'


let count = 1;
class Demo1 extends Component {

    success=()=>{
        NcToast.create({
            type:'success',
            content:"success"
        })
    }
    error=()=>{
        NcToast.create({
            type:'error',
            content:"error"+count.toString()
        })
        count++;
    }
    warning=()=>{
        NcToast.create({
            type:'warning',
            content:"warning"
        })
    }
    destoryAll=()=>{
        NcToast.destoryAll();
    }

    render () {
        return (
            <div>
                <Button
                    colors="success"
                    onClick={this.success}>
                    success
                </Button>
                <Button
                    colors="danger"
                    onClick={this.error}>
                    error
                </Button>
                <Button
                    colors="warning"
                    onClick={this.warning}>
                    warning
                </Button>
                <Button
                    onClick={this.destoryAll}>
                    destoryAll
                </Button>
            </div>
        )
    }
}
export default Demo1