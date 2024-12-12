import './css/Footer.css';
import {Button, Flex, Typography} from "antd";
import {GithubOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";

export default function Footer() {
    return (
        <Flex
            className="footer-main"
            justify="center"
            vertical
            gap={18}
        >
            <Flex
                justify="center"
                gap={4}
            >
                <Button
                    icon={<GithubOutlined />}
                    onClick={() => window.open('https://github.com/')}
                />
            </Flex>

            <Typography.Text
                className="footer-text"
            >
                © 2024 - UBO - Projet d'IHM
            </Typography.Text>
        </Flex>
    )
}