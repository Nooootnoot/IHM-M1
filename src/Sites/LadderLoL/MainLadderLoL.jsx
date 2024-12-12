import {Flex, Switch, Table, Typography, Popover } from "antd";
import {useEffect, useState} from "react";
import './css/MainLadderLoL.css';
import {getAccount, getCarrousel} from "./db/account.js";
import axios from "axios";
import Lottie from 'react-lottie-player';

// import les ranks
import iron from "../../assets/Rank=Iron.png";
import bronze from "../../assets/Rank=Bronze.png";
import silver from "../../assets/Rank=Silver.png";
import gold from "../../assets/Rank=Gold.png";
import platinum from "../../assets/Rank=Platinum.png";
import emerald from "../../assets/Rank=Emerald.png";
import diamond from "../../assets/Rank=Diamond.png";
import master from "../../assets/Rank=Master.png";
import grandmaster from "../../assets/Rank=Grandmaster.png";
import challenger from "../../assets/Rank=Challenger.png";
import unranked from "../../assets/Rank=Unranked.png";

import noChamp from "../../assets/-1.png";

import HotStreak from "../../assets/HotStreak.json";

import jungle from "../../assets/position-jungle.svg";
import mid from "../../assets/position-middle.svg";
import adc from "../../assets/position-bottom.svg";
import support from "../../assets/position-utility.svg";
import top from "../../assets/position-top.svg";
import {CaretDownOutlined, CaretUpOutlined, MinusOutlined} from "@ant-design/icons";
import InfiniteHorizontalScroll from "./components/InfiniteHorizontalScroll.jsx";
import CarrouselData from "./components/CarrouselData.jsx";

export default function MainLadderLoL() {
    const [data, setData] = useState([])
    const [version, setVersion] = useState('')
    const [loading, setLoading] = useState(true)

    const [carrouselDataSoloQ, setCarrouselDataSoloQ] = useState([])
    const [carrouselDataFlex, setCarrouselDataFlex] = useState([])

    const [mode, setMode] = useState('soloq')

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (version !== '') {
            getCarrousel().then(([dataSoloq, dataFlex]) => {
                setCarrouselDataSoloQ(dataSoloq.map((item, index) => (
                    <CarrouselData
                        key={index}
                        data={item}
                        version={version}
                    />
                )))

                setCarrouselDataFlex(dataFlex.map((item, index) => (
                    <CarrouselData
                        key={index}
                        data={item}
                        version={version}
                    />
                )))
            });
        }
    }, [version]);

    function getData() {
        axios.get('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => {
            setVersion(response.data[0])
        })
        getAccount('soloq').then((data) => {
            if (mode === 'soloq') {
                const newData = data.sort((a, b) => {
                    return b.scoreSoloq - a.scoreSoloq
                })
                setData(newData)
            } else {
                const newData = data.sort((a, b) => {
                    return b.scoreFlex - a.scoreFlex
                })
                setData(newData)
            }
            setLoading(false)
        });
    }

    useEffect(() => {
        if (mode === 'soloq') {
            const newDataTmp = [...data]
            const newData = newDataTmp.sort((a, b) => {
                return b.scoreSoloq - a.scoreSoloq
            })
            setData(newData)
        } else {
            const newDataTmp = [...data]
            const newData = newDataTmp.sort((a, b) => {
                return b.scoreFlex - a.scoreFlex
            })
            setData(newData)
        }
        setLoading(false)
    }, [mode]);

    function onChangeSwitch(checked) {
        setLoading(true)
        setTimeout(() => {
            if (checked) {
                setMode('soloq')
            } else {
                setMode('flex')
            }
        }, 200)
    }

    function switchRank(rank) {
        switch (rank) {
            case 'UNRANKED' || 'Unranked' || 'unranked':
                return unranked
            case 'IRON' || 'Iron' || 'iron':
                return iron
            case 'BRONZE' || 'Bronze' || 'bronze':
                return bronze
            case 'SILVER' || 'Silver' || 'silver':
                return silver
            case 'GOLD' || 'Gold' || 'gold':
                return gold
            case 'PLATINUM' || 'Platinum' || 'platinum':
                return platinum
            case 'EMERALD' || 'Emerald' || 'emerald':
                return emerald
            case 'DIAMOND' || 'Diamond' || 'diamond':
                return diamond
            case 'MASTER' || 'Master' || 'master':
                return master
            case 'GRANDMASTER' || 'Grandmaster' || 'grandmaster':
                return grandmaster
            case 'CHALLENGER' || 'Challenger' || 'challenger':
                return challenger
            default:
                return unranked
        }
    }

    function lowerCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function switchPosition(position) {
        if (position[0] && position[0][0] !== 'NONE') {
            switch (position[0][0]) {
                case 'JUNGLE':
                    return jungle
                case 'MIDDLE':
                    return mid
                case 'BOTTOM':
                    return adc
                case 'UTILITY':
                    return support
                case 'TOP':
                    return top
                default:
                    return jungle
            }
        } else {
            return noChamp
        }
    }

    function getNumberOfGamePlayedWithRole(roles, role) {
        const roleToSearch = transformRoleName(role);
        const res = roles.find(role => role[0] === roleToSearch);
        if (res) {
            return res[1];
        } else {
            return 0;
        }
    }

    function transformRoleName(role) {
        switch (role) {
            case 'top':
                return 'TOP'

            case 'jungle':
                return 'JUNGLE'

            case 'mid':
                return 'MIDDLE'

            case 'adc':
                return 'BOTTOM'

            case 'support':
                return 'UTILITY'
        }
    }

    function getRoleImage(role) {
        switch (role) {
            case 'top':
                return top

            case 'jungle':
                return jungle

            case 'mid':
                return mid

            case 'adc':
                return adc

            case 'support':
                return support
        }
    }

    const columnsSoloq = [
        {
            title: 'Rang',
            dataIndex: 'rank',
            key: 'rank',
            width: 50,
            render: (text, record, index) => (
                <Typography.Text>
                    {
                        (index + 1) - (record.positionJmoins1Soloq) > 0 ? (
                            <CaretDownOutlined style={{
                                color: 'red'
                            }}/>
                        ) : (
                            (index + 1) - (record.positionJmoins1Soloq) < 0 ? (
                                <CaretUpOutlined style={{
                                    color: 'green'
                                }}/>
                            ) : (
                                <MinusOutlined/>
                            )
                        )
                    }
                    {index + 1}
                </Typography.Text>
            ),
            align: 'center'
        },
        {
            title: 'Pseudo',
            dataIndex: 'nameWithTag',
            key: 'nameWithTag',
            width: 250,
            render: (text, record) => (
                <Flex
                    gap={10}
                    align="center"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                        const gameName = record.nameWithTag.split('#')[0]
                        const tagLine = record.nameWithTag.split('#')[1]
                        const encryptedGameName = encodeURI(gameName)
                        window.open(`https://www.op.gg/summoners/euw/${encryptedGameName}-${tagLine}`, '_blank')
                    }}
                >
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${record.profileIconId}.png`}
                        alt="icon"
                        className="ladder-lol-icon"
                    />
                    <Lottie
                        className={"ladder-lol-hot-streak" + (record.hotStreakSoloq ? " hot-streak-display" : " hot-streak-display-none")}
                        loop
                        animationData={HotStreak}
                        play
                        style={{width: 100, height: 100}}
                    />
                    <Typography.Text>{text}</Typography.Text>
                    <div className={record.live === 'soloq' ? "text-glow" : ""}></div>
                </Flex>
            ),
        },
        {
            title: 'Joueur',
            dataIndex: 'joueur',
            key: 'joueur',
            width: 100,
        },
        {
            title: 'Role',
            dataIndex: 'mostPlayedRoleSoloq',
            key: 'mostPlayedRoleSoloq',
            width: 40,
            render: (text, record) => (
                <Popover
                    content={
                        <Flex
                            gap={5}
                        >
                            {
                                ['top', 'jungle', 'mid', 'adc', 'support'].map(role => (
                                    <Flex
                                        vertical
                                        align="center"
                                        key={role}
                                    >
                                        <img
                                            src={getRoleImage(role)}
                                            alt={'role'}
                                        />
                                        <Typography.Text>{getNumberOfGamePlayedWithRole(text, role)}</Typography.Text>
                                    </Flex>
                                ))
                            }
                        </Flex>
                    }
                >
                    <img
                        src={switchPosition(text)}
                        alt="icon"
                        className="ladder-lol-position-icon"
                    />
                </Popover>
            )
        },
        {
            title: 'Rank',
            dataIndex: 'scoreSoloq',
            key: 'scoreSoloq',
            width: 220,
            sorter: (a, b) => a.scoreSoloq - b.scoreSoloq,
            render: (text, record) => (
                <Flex
                    gap={10}
                    align="center"
                >
                    <img
                        src={switchRank(record.tierSoloq)}
                        alt="icon"
                        className="ladder-lol-rank-icon"
                    />
                    <Typography.Text>{record.tierSoloq === "Unranked" ? "Unranked" : lowerCase(record.tierSoloq) + " " + record.rankSoloq + " " + record.leaguePointsSoloq + " Lp"}</Typography.Text>
                </Flex>
            )
        },
        {
            title: 'Last games',
            dataIndex: 'last5Soloq',
            key: 'last5Soloq',
            width: 300,
            render: (text, record) => (
                <Flex
                    gap={4}
                >
                    {
                        [0, 1, 2, 3, 4].map((number, index) => {
                            return text[number] ? (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].championName}.png`}
                                        alt="icon"
                                        className={"ladder-lol-champ-icon" + (text[number].result ? " ladder-lol-win" : " ladder-lol-loss")}
                                    />
                                    <Typography.Text
                                        className="ladder-lol-champ-kda">{text[number].kills + "/" + text[number].deaths + "/" + text[number].assists}</Typography.Text>
                                </Flex>
                            ) : (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={noChamp}
                                        alt="icon"
                                        className="ladder-lol-champ-icon"
                                    />
                                    <Typography.Text><br/></Typography.Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            )
        },
        {
            title: 'Games',
            dataIndex: 'winsSoloq',
            key: 'winsSoloq',
            width: 50,
            sorter: (a, b) => (a.winsSoloq + a.lossesSoloq) - (b.winsSoloq + b.lossesSoloq),
            render: (text, record) => (
                <Typography.Text>
                    {record.winsSoloq + record.lossesSoloq}
                </Typography.Text>
            ),
            align: 'center'
        },
        {
            title: 'Winrate',
            dataIndex: 'winsSoloq',
            key: 'winsSoloq',
            width: 150,
            render: (text, record) => (
                <Typography.Text
                    className={record.winsSoloq >= record.lossesSoloq ? "ladder-lol-winrate-green" : "ladder-lol-winrate-red"}
                >
                    {record.winsSoloq + "W / " + record.lossesSoloq + "L"} {record.winsSoloq + record.lossesSoloq === 0 ? "(0%)" : "(" + Math.round((record.winsSoloq / (record.winsSoloq + record.lossesSoloq)) * 100) + "%)"}
                </Typography.Text>
            )
        },
        {
            title: 'DPM',
            dataIndex: 'dpmSoloq',
            key: 'dpmSoloq',
            width: 45,
            sorter: (a, b) => a.dpmSoloq - b.dpmSoloq,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(0)}</Typography.Text>
            ),
        },
        {
            title: 'CSM',
            dataIndex: 'csmSoloq',
            key: 'csmSoloq',
            width: 45,
            sorter: (a, b) => a.csmSoloq - b.csmSoloq,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(1)}</Typography.Text>
            ),
        },
        {
            title: 'KDA',
            dataIndex: 'kdaSoloq',
            key: 'kdaSoloq',
            width: 45,
            sorter: (a, b) => a.kdaSoloq - b.kdaSoloq,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(2)}</Typography.Text>
            ),
        },
        {
            title: 'Vision',
            dataIndex: 'scoreVisionSoloq',
            key: 'scoreVisionSoloq',
            sorter: (a, b) => a.scoreVisionSoloq - b.scoreVisionSoloq,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(1)}</Typography.Text>
            )
        },
        {
            title: 'Most played',
            dataIndex: 'top3ChampSoloq',
            key: 'top3ChampSoloq',
            width: 200,
            render: (text, record) => (
                <Flex
                    gap={2}
                    align="center"
                >
                    {
                        [0, 1, 2].map((number, index) => {
                            return text[number] ? (
                                <Popover
                                    key={index}
                                    content={
                                        <Flex
                                            vertical
                                            gap={10}
                                        >
                                            <Flex
                                                gap={45}
                                                justify="space-between"
                                            >
                                                <Flex
                                                    vertical
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        W/L
                                                    </Typography.Text>
                                                    <Typography.Text
                                                        className={text[number].win >= text[number].loss ? "ladder-lol-winrate-green" : "ladder-lol-winrate-red"}
                                                    >
                                                        {text[number].win} / {text[number].loss} {text[number].win + text[number].loss === 0 ? "(0%)" : "(" + Math.round((text[number].win / (text[number].win + text[number].loss)) * 100) + "%)"}
                                                    </Typography.Text>
                                                </Flex>
                                                <Flex
                                                    vertical
                                                    style={{
                                                        textAlign: "right"
                                                    }}
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        DPM
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].dpm / (text[number].minutes / 60)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                gap={45}
                                                justify="space-between"
                                            >
                                                <Flex
                                                    vertical
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        Vision
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].visionScore / (text[number].win + text[number].loss)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                                <Flex
                                                    vertical
                                                    style={{
                                                        textAlign: "right"
                                                    }}
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        CSM
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].csm / (text[number].minutes / 60)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                vertical
                                            >
                                                <Typography.Text
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Dernières games
                                                </Typography.Text>
                                                <Flex
                                                    gap={4}
                                                >
                                                    {
                                                        [0, 1, 2].map((num, index) => {
                                                            return text[number].lastGames[num] ? (
                                                                <Flex
                                                                    key={index}
                                                                    vertical
                                                                    align="center"
                                                                >
                                                                    {
                                                                        <>
                                                                            <img
                                                                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].lastGames[num].championName}.png`}
                                                                                alt="icon"
                                                                                className={"ladder-lol-champ-icon " + (text[number].lastGames[num].result ? "ladder-lol-win" : "ladder-lol-loss")}
                                                                            />
                                                                            <Typography.Text
                                                                                className="ladder-lol-champ-kda">{text[number].lastGames[num].kills + "/" + text[number].lastGames[num].deaths + "/" + text[number].lastGames[num].assists}</Typography.Text>
                                                                        </>
                                                                    }
                                                                </Flex>
                                                            ) : (
                                                                <Flex
                                                                    key={index}
                                                                    vertical
                                                                    align="center"
                                                                >
                                                                    <img
                                                                        src={noChamp}
                                                                        alt="icon"
                                                                        className="ladder-lol-champ-icon"
                                                                    />
                                                                    <Typography.Text><br/></Typography.Text>
                                                                </Flex>
                                                            )
                                                        })
                                                    }
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    }
                                >
                                    <Flex
                                        key={index}
                                        vertical
                                        justify="center"
                                        align="center"
                                    >
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].championName}.png`}
                                            alt="icon"
                                            className="ladder-lol-champ-icon"
                                        />
                                        <Typography.Text>
                                            {
                                                text[number].deaths === 0
                                                    ? text[number].kills === 0 && text[number].assists === 0 ? "Perfect" : "1.00"
                                                    : ((text[number].kills + text[number].assists) / text[number].deaths).toFixed(2)
                                            }
                                        </Typography.Text>
                                    </Flex>
                                </Popover>
                            ) : (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={noChamp}
                                        alt="icon"
                                        className="ladder-lol-champ-icon"
                                    />
                                    <Typography.Text><br/></Typography.Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            )
        }
    ]
    const columnsFlex = [
        {
            title: 'Rang',
            dataIndex: 'rank',
            key: 'rank',
            width: 50,
            render: (text, record, index) => (
                <Typography.Text>
                    {
                        (index + 1) - (record.positionJmoins1Flex) > 0 ? (
                            <CaretDownOutlined style={{
                                color: 'red'
                            }}/>
                        ) : (
                            (index + 1) - (record.positionJmoins1Flex) < 0 ? (
                                <CaretUpOutlined style={{
                                    color: 'green'
                                }}/>
                            ) : (
                                <MinusOutlined/>
                            )
                        )
                    }
                    {index + 1}
                </Typography.Text>
            ),
            align: 'center'
        },
        {
            title: 'Pseudo',
            dataIndex: 'nameWithTag',
            key: 'nameWithTag',
            width: 250,
            render: (text, record) => (
                <Flex
                    gap={10}
                    align="center"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                        const gameName = record.nameWithTag.split('#')[0]
                        const tagLine = record.nameWithTag.split('#')[1]
                        const encryptedGameName = encodeURI(gameName)
                        window.open(`https://www.op.gg/summoners/euw/${encryptedGameName}-${tagLine}`, '_blank')
                    }}
                >
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${record.profileIconId}.png`}
                        alt="icon"
                        className="ladder-lol-icon"
                    />
                    <Lottie
                        className={"ladder-lol-hot-streak" + (record.hotStreakFlex ? " hot-streak-display" : " hot-streak-display-none")}
                        loop
                        animationData={HotStreak}
                        play
                        style={{width: 100, height: 100}}
                    />
                    <Typography.Text>{text}</Typography.Text>
                    <div className={record.live === 'flex' ? "text-glow" : ""}></div>
                </Flex>
            ),
        },
        {
            title: 'Joueur',
            dataIndex: 'joueur',
            key: 'joueur',
            width: 100,
        },
        {
            title: 'Role',
            dataIndex: 'mostPlayedRoleFlex',
            key: 'mostPlayedRoleFlex',
            width: 40,
            render: (text, record) => (
                <Popover
                    content={
                        <Flex
                            gap={5}
                        >
                            {
                                ['top', 'jungle', 'mid', 'adc', 'support'].map(role => (
                                    <Flex
                                        vertical
                                        align="center"
                                        key={role}
                                    >
                                        <img
                                            src={getRoleImage(role)}
                                            alt={'role'}
                                        />
                                        <Typography.Text>{getNumberOfGamePlayedWithRole(text, role)}</Typography.Text>
                                    </Flex>
                                ))
                            }
                        </Flex>
                    }
                >
                    <img
                        src={switchPosition(text)}
                        alt="icon"
                        className="ladder-lol-position-icon"
                    />
                </Popover>
            )
        },
        {
            title: 'Rank',
            dataIndex: 'scoreFlex',
            key: 'scoreFlex',
            width: 220,
            sorter: (a, b) => a.scoreFlex - b.scoreFlex,
            render: (text, record) => (
                <Flex
                    gap={10}
                    align="center"
                >
                    <img
                        src={switchRank(record.tierFlex)}
                        alt="icon"
                        className="ladder-lol-rank-icon"
                    />
                    <Typography.Text>{record.tierFlex === "Unranked" ? "Unranked" : lowerCase(record.tierFlex) + " " + record.rankFlex + " " + record.leaguePointsFlex + " Lp"}</Typography.Text>
                </Flex>
            )
        },
        {
            title: 'Last games',
            dataIndex: 'last5Flex',
            key: 'last5Flex',
            width: 300,
            render: (text, record) => (
                <Flex
                    gap={4}
                >
                    {
                        [0, 1, 2, 3, 4].map((number, index) => {
                            return text[number] ? (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].championName}.png`}
                                        alt="icon"
                                        className={"ladder-lol-champ-icon" + (text[number].result ? " ladder-lol-win" : " ladder-lol-loss")}
                                    />
                                    <Typography.Text
                                        className="ladder-lol-champ-kda">{text[number].kills + "/" + text[number].deaths + "/" + text[number].assists}</Typography.Text>
                                </Flex>
                            ) : (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={noChamp}
                                        alt="icon"
                                        className="ladder-lol-champ-icon"
                                    />
                                    <Typography.Text><br/></Typography.Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            )
        },
        {
            title: 'Games',
            dataIndex: 'winsFlex',
            key: 'winsFlex',
            width: 50,
            sorter: (a, b) => (a.winsFlex + a.lossesFlex) - (b.winsFlex + b.lossesFlex),
            render: (text, record) => (
                <Typography.Text>
                    {record.winsFlex + record.lossesFlex}
                </Typography.Text>
            ),
            align: 'center'
        },
        {
            title: 'Winrate',
            dataIndex: 'winsFlex',
            key: 'winsFlex',
            width: 150,
            render: (text, record) => (
                <Typography.Text
                    className={record.winsFlex >= record.lossesFlex ? "ladder-lol-winrate-green" : "ladder-lol-winrate-red"}
                >
                    {record.winsFlex + "W / " + record.lossesFlex + "L"} {record.winsFlex + record.lossesFlex === 0 ? "(0%)" : "(" + Math.round((record.winsFlex / (record.winsFlex + record.lossesFlex)) * 100) + "%)"}
                </Typography.Text>
            )
        },
        {
            title: 'DPM',
            dataIndex: 'dpmFlex',
            key: 'dpmFlex',
            width: 45,
            sorter: (a, b) => a.dpmFlex - b.dpmFlex,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(0)}</Typography.Text>
            ),
        },
        {
            title: 'CSM',
            dataIndex: 'csmFlex',
            key: 'csmFlex',
            width: 45,
            sorter: (a, b) => a.csmFlex - b.csmFlex,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(1)}</Typography.Text>
            ),
        },
        {
            title: 'KDA',
            dataIndex: 'kdaFlex',
            key: 'kdaFlex',
            width: 45,
            sorter: (a, b) => a.kdaFlex - b.kdaFlex,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(2)}</Typography.Text>
            ),
        },
        {
            title: 'Vision',
            dataIndex: 'scoreVisionFlex',
            key: 'scoreVisionFlex',
            sorter: (a, b) => a.scoreVisionFlex - b.scoreVisionFlex,
            render: (text, record) => (
                <Typography.Text>{text.toFixed(1)}</Typography.Text>
            )
        },
        {
            title: 'Most played',
            dataIndex: 'top3ChampFlex',
            key: 'top3ChampFlex',
            width: 200,
            render: (text, record) => (
                <Flex
                    gap={2}
                    align="center"
                >
                    {
                        [0, 1, 2].map((number, index) => {
                            return text[number] ? (
                                <Popover
                                    key={index}
                                    content={
                                        <Flex
                                            vertical
                                            gap={10}
                                        >
                                            <Flex
                                                gap={45}
                                                justify="space-between"
                                            >
                                                <Flex
                                                    vertical
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        W/L
                                                    </Typography.Text>
                                                    <Typography.Text
                                                        className={text[number].win >= text[number].loss ? "ladder-lol-winrate-green" : "ladder-lol-winrate-red"}
                                                    >
                                                        {text[number].win} / {text[number].loss} {text[number].win + text[number].loss === 0 ? "(0%)" : "(" + Math.round((text[number].win / (text[number].win + text[number].loss)) * 100) + "%)"}
                                                    </Typography.Text>
                                                </Flex>
                                                <Flex
                                                    vertical
                                                    style={{
                                                        textAlign: "right"
                                                    }}
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        DPM
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].dpm / (text[number].minutes / 60)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                gap={45}
                                                justify="space-between"
                                            >
                                                <Flex
                                                    vertical
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        Vision
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].visionScore / (text[number].win + text[number].loss)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                                <Flex
                                                    vertical
                                                    style={{
                                                        textAlign: "right"
                                                    }}
                                                >
                                                    <Typography.Text
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}
                                                    >
                                                        CSM
                                                    </Typography.Text>
                                                    <Typography.Text>{(text[number].csm / (text[number].minutes / 60)).toFixed(1)}</Typography.Text>
                                                </Flex>
                                            </Flex>
                                            <Flex
                                                vertical
                                            >
                                                <Typography.Text
                                                    style={{
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    Dernières games
                                                </Typography.Text>
                                                <Flex
                                                    gap={4}
                                                >
                                                    {
                                                        [0, 1, 2].map((num, index) => {
                                                            return text[number].lastGames[num] ? (
                                                                <Flex
                                                                    key={index}
                                                                    vertical
                                                                    align="center"
                                                                >
                                                                    {
                                                                        <>
                                                                            <img
                                                                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].lastGames[num].championName}.png`}
                                                                                alt="icon"
                                                                                className={"ladder-lol-champ-icon " + (text[number].lastGames[num].result ? "ladder-lol-win" : "ladder-lol-loss")}
                                                                            />
                                                                            <Typography.Text
                                                                                className="ladder-lol-champ-kda">{text[number].lastGames[num].kills + "/" + text[number].lastGames[num].deaths + "/" + text[number].lastGames[num].assists}</Typography.Text>
                                                                        </>
                                                                    }
                                                                </Flex>
                                                            ) : (
                                                                <Flex
                                                                    key={index}
                                                                    vertical
                                                                    align="center"
                                                                >
                                                                    <img
                                                                        src={noChamp}
                                                                        alt="icon"
                                                                        className="ladder-lol-champ-icon"
                                                                    />
                                                                    <Typography.Text><br/></Typography.Text>
                                                                </Flex>
                                                            )
                                                        })
                                                    }
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    }
                                >
                                    <Flex
                                        key={index}
                                        vertical
                                        justify="center"
                                        align="center"
                                    >
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${text[number].championName}.png`}
                                            alt="icon"
                                            className="ladder-lol-champ-icon"
                                        />
                                        <Typography.Text>
                                            {
                                                text[number].deaths === 0
                                                    ? text[number].kills === 0 && text[number].assists === 0 ? "1.00" : "Perfect"
                                                    : ((text[number].kills + text[number].assists) / text[number].deaths).toFixed(2)
                                            }
                                        </Typography.Text>
                                    </Flex>
                                </Popover>
                            ) : (
                                <Flex
                                    key={index}
                                    vertical
                                    justify="center"
                                    align="center"
                                >
                                    <img
                                        src={noChamp}
                                        alt="icon"
                                        className="ladder-lol-champ-icon"
                                    />
                                    <Typography.Text><br/></Typography.Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            )
        }
    ]

    return (
        <Flex
            vertical
            className="ladder-lol-main"
            align="center"
            gap={10}
        >
            {
                version !== '' && carrouselDataSoloQ.length !== 0 && carrouselDataFlex.length !== 0 && (
                    <Flex
                        style={{
                            overflow: "hidden",
                            width: "100%",
                        }}
                        justify="center"
                        align="center"
                    >
                        <InfiniteHorizontalScroll items={mode === 'soloq' ? carrouselDataSoloQ : carrouselDataFlex} speed={1}/>
                    </Flex>
                )
            }
            <Flex>
                <Switch
                    checkedChildren="SoloQ"
                    unCheckedChildren="Flex"
                    defaultChecked
                    onChange={onChangeSwitch}
                />
            </Flex>
            <Table
                dataSource={data}
                loading={loading}
                columns={mode === 'soloq' ? columnsSoloq : columnsFlex}
                pagination={false}
                className="ladder-lol-table"
                rowKey={(record) => record.puuid}
            />
        </Flex>
    )
}