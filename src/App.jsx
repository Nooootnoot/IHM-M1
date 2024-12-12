import {Card, Flex} from "antd";
import {useNavigate} from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import './App.css';

function App() {
    const navigate = useNavigate();
    const { Meta } = Card;

    return (
        <Flex
            vertical
            className="main"
            justify="flex-start"
        >
            <Header/>
            <Flex
                className="content"
                vertical
                gap={16}
            >
                <Flex
                    justify="center"
                    align="flex-start"
                    gap={16}
                >
                    <Card
                        hoverable
                        style={{ width: 240, height: 150 }}
                        onClick={() => navigate('/pong')}
                    >
                        <Meta title="Pong" description="Jeu de pong en solo" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240, height: 150 }}
                        onClick={() => navigate('/ladder-lol')}
                    >
                        <Meta title="Ladder LoL" description="Ladder SoloQ et FlexQ" />
                    </Card>
                </Flex>
            </Flex>
            <Footer/>
        </Flex>
    )
}

export default App
