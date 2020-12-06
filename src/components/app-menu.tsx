import React from 'react';
import {useHistory} from "react-router-dom";
import {Tabs} from 'antd';

const {TabPane} = Tabs;

export function AppMenu() {
    const history = useHistory();
    const handleClick = (key: string) => {
        history.push('/' + key);
    };
    return (
        <Tabs defaultActiveKey="main" onChange={handleClick} centered={true}>
            <TabPane tab="Главная" key="main">
                Главная
            </TabPane>
            <TabPane tab="Результат" key="result">
                Результат
            </TabPane>
            <TabPane tab="О проекте" key="about">
                О проекте
            </TabPane>
        </Tabs>
    );
}