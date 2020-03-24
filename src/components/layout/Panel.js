import React, { Component } from 'react'
import {Panel , PanelHeading,PanelBlock,Control,Input,Icon,PanelTabs,PanelTab,PanelIcon,Checkbox,Button} from "bloomer"
export default class Panal extends Component {
    render() {
        return (
            <Panel>
    <PanelHeading>Repositories</PanelHeading>
    <PanelBlock>
        <Control hasIcons='left'>
            <Input isSize='small' placeholder='Search' />
            <Icon isSize='small' isAlign='left'>
                <span className='fa fa-search' aria-hidden='true' />
            </Icon>
        </Control>
    </PanelBlock>
    <PanelTabs>
        <PanelTab isActive>All</PanelTab>
        <PanelTab>Public</PanelTab>
        <PanelTab>Private</PanelTab>
        <PanelTab>Sources</PanelTab>
        <PanelTab>Fork</PanelTab>
    </PanelTabs>
    <PanelBlock isActive>
        <PanelIcon className="fa fa-book" />
        Bloomer
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        RxJS
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Webpack
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Typescript
    </PanelBlock>
    <PanelBlock tag='label'>
        <Checkbox> Remember me</Checkbox>
    </PanelBlock>
    <PanelBlock>
        <Button isOutlined > Reset all filters</Button>
    </PanelBlock>
</Panel>
        )
    }
}
