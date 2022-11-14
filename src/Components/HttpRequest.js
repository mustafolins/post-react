import { Button, Card, Divider, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class HttpRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: (props.url) ? props.url : '',
            method: (props.method) ? props.method : 'GET',
            headers: [],
            responseBodyJson: ''
        }

        this.setUrl = this.setUrl.bind(this)
        this.setMethod = this.setMethod.bind(this)
        this.send = this.send.bind(this)
    }
    setUrl(event) {
        this.setState({
            url: event.target.value
        })
    }
    setMethod(event) {
        this.setState({
            method: event.target.value
        })
    }
    send() {
        let options = {
            method: this.state.method
        }
        console.log(options)
        fetch(this.state.url, options)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    responseBodyJson: JSON.stringify(data)
                })
            })
    }
    render() {
        return (
            <div>
                <FormControl style={{ margin: '4px' }}>
                    <TextField label='Url' variant='outlined' onChange={this.setUrl} value={this.state.url} />
                    <Select label='Method' onChange={this.setMethod} defaultValue='GET'>
                        <MenuItem value='GET'>GET</MenuItem>
                        <MenuItem value='HEAD'>HEAD</MenuItem>
                        <MenuItem value='POST'>POST</MenuItem>
                        <MenuItem value='PUT'>PUT</MenuItem>
                        <MenuItem value='DELETE'>DELETE</MenuItem>
                        <MenuItem value='CONNECT'>CONNECT</MenuItem>
                        <MenuItem value='OPTIONS'>OPTIONS</MenuItem>
                        <MenuItem value='TRACE'>TRACE</MenuItem>
                    </Select>
                    <Button variant='outlined' onClick={this.send}>Send!</Button>
                </FormControl>
                <Divider />
                <Typography variant='body1'>
                    {this.state.headers.join(',')}
                </Typography>
                {(this.state.responseBodyJson.length === 0) ? '' :
                    <Card>
                        <Typography style={{ maxHeight: '150px', maxWidth: '300px', wordWrap: 'break-word', overflow: 'scroll' }} variant='body1'>
                            {this.state.responseBodyJson}
                        </Typography>
                    </Card>
                }
            </div>
        )
    }
}
