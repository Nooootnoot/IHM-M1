import './css/Header.css';
import {Flex, Typography} from "antd";

export default function Header() {
    return (
        <Flex
            className="header-main"
            justify="center"
            align="center"
            vertical
        >
            <Typography.Title
                level={1}
                className="header-title"
            >
                IHM
            </Typography.Title>
        </Flex>
    )
}