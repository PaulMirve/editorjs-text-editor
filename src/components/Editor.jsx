import React, { Component } from 'react';
import Editor from '@stfy/react-editor.js';
import ImageTool from '@editorjs/image';
import './Editor.css';

export default class MyEditor extends Component {

    state = {text: null}

    render() {
        console.log(this.state.texto);
        return (
            <div>
                <Editor
                    autofocus
                    excludeDefaultTools={['code', 'raw']}
                    customTools={{
                        image: {
                            class: ImageTool,
                            config: {
                                endpoints: {
                                    byFile: 'http://127.0.0.1:8000/image/', // Your backend file uploader endpoint
                                    byUrl: 'http://127.0.0.1:8000/image/', // Your endpoint that provides uploading by Url
                                },
                                field:'image_url',
                                additionalRequestData:{
                                    fk_post: 2
                                }
                            }
                        }
                    }}
                    onChange={(data)=>this.setState({text: data.blocks})}
                />
                <button onClick={this.getJSON}>Texto</button>
            </div>    
        )
    }
}
